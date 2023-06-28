import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import dashboardCardApi from "../APIs/dashboardCardApi";
import '../Dashboard/dashboard.css';
import { useParams } from "react-router-dom";
import http from "../../http";
import { useNavigate } from 'react-router-dom';

export default function DashboardCards() {
  const {uid} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    
      fetchInformation();
   
  },[]);


  const fetchInformation = () => {
   
    http.get(`/users`).then((res) => {
      res.data.map((item) => (
        
        //InfoObj
        http.get(`/personalInfo/${item.User_id}`).then((res) => {
          item.infoObj = res.data[0];
        }),
  
        //ProfessionObj
        http.get(`/education/${item.User_id}`).then((res) => {
          item.professionObj = res.data[0];
        }),

        //ImageObj
        http.get(`/images/${item.User_id}`).then((res) => {
          item.imgObj = res.data[0];
        })
      ));
      setWorkData(res.data);
      setIsLoading(false);
      console.log(workData);
      
      
    });
  };
  
  return (
    <MDBRow center className="gy-5 gx-3">
        {isLoading ? <h1>Loading.....</h1> : (
          workData.map((curElem) => {
          if(curElem.imgObj  && curElem.infoObj && curElem.professionObj)
          {
          const { First_Name, Last_Name, infoObj, imgObj, professionObj} = curElem;
          return(
            <>
            <MDBCol md="4" sm='12'>
        <MDBCard id="MDBCard" style={{width:'100%', height:'100%'}} onClick={()=>{
          navigate(`/dashboard/${uid}/profile/${infoObj.User_id}`,{replace:false});
        }}>
          <MDBRow className="g-0">
            <MDBCol md="5" sm='4' xs='4'>
              <MDBCardImage src={`http://localhost:8000/${imgObj.Image_path}`} className="imgSize" alt="..." />
            </MDBCol>
            <MDBCol md="7" sm='8' xs='8'>
              <MDBCardBody>
                <MDBCardTitle>{`${First_Name} ${Last_Name}`}, {infoObj.Age}</MDBCardTitle>
                <MDBCardText>
                  {`${infoObj.City}, ${infoObj.State} ${infoObj.Country}`}
                </MDBCardText>
                <MDBCardText>
                  {professionObj.Profession}
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>
      </>
          )
          };
          }))}
    </MDBRow>
  );
}
