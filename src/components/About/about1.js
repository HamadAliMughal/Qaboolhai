import React from "react";
import "./about.css";
import uet from "./images/uet.jpg";

import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const About1 = () => {
  return (
    <>
      <MDBRow>
        <MDBCol className="col-12 col-lg-12">
          <div className="about-section justify-content-center">
            <h1>About Us</h1>
            <p>
              Qaboolhai.com is a registered and trademarked corporation based in
              the USA. We are a leading international matchmaking company for
              singles globally. Through our network we want to make the process
              of relationship journey relatively effortless. All profiles are
              checked manually with phone verification to ensure a safe
              environment for the users.
            </p>
          </div>
        </MDBCol>
      </MDBRow>
      <br></br>
      <MDBRow>
        <MDBCol lg='12'>
          <h1 className="ssf-head-text">Our Location </h1>
        </MDBCol>
        <MDBCol lg='12'>
          <MDBRow center>
            <MDBCol className="col-0 col-lg-3"></MDBCol>
            <MDBCol className="col-12 col-lg-6">
              <MDBCard className="card fudi">
                <MDBCardImage className="" src={uet} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle></MDBCardTitle>
                  <MDBCardText>
                    The University of Engineering and Technology, Lahore is a
                    public university located in Lahore, Punjab, Pakistan
                    specializing in science, technology, engineering and
                    mathematics subjects. It is one of the oldest and the most
                    selective engineering institutions in Pakistan.
                  </MDBCardText>
                  <MDBBtn
                    className="d-flex justify-content-center"
                    href="https://www.google.com/maps/place/University+of+Engineering+and+Technology,+Lahore/@31.5799244,74.3563183,15z/data=!4m2!3m1!1s0x0:0x4dcac84ea2200944?sa=X&ved=2ahUKEwjb76jGluH4AhVEtqQKHdicBRMQ_BJ6BAhiEAU"
                  >
                    Visit
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="col-0 col-lg-3"></MDBCol>
          </MDBRow>
        </MDBCol>
        <br></br>
        <MDBCol lg='12'>
          <h1 className="ssf-head-text">Our Leadership Team </h1>
        </MDBCol>
        <MDBCol lg='12'>
          <MDBRow center>
            <MDBCol className="col-12 col-lg-4">
              <MDBCard className="card-size">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="col-12 col-lg-4">
              <MDBCard className="card-size">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="col-12 col-lg-4">
              <MDBCard className="card-size">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default About1;
{
  /* <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%"/>
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</> */
}
