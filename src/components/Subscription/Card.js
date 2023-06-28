import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol,MDBContainer, MDBRow, MDBIcon } from 'mdb-react-ui-kit';
import './Card.css';

function Card() {
  return (
    <>
    <div className='bg-light'></div>
    <h1 className='my-3 text-center heading'><span>Subscription</span> Plans</h1>
    <MDBContainer className='my-5'>
      <MDBRow className='gy-3'>
      <MDBCol md='4' sm='12'>
    <MDBCard background='info' className='mdb-card'>
      <MDBCardBody className='text-center text-white justify-content-center'>
        <MDBCardTitle className='fs-1'>Basic</MDBCardTitle>
        <MDBCardText>
          <span className='fw-bold fs-2'>5 <MDBIcon fas icon="dollar-sign" /></span><br/>
          <ul>
            <li><MDBIcon fas icon="check" className='me-3'/>Show Contact</li>
            <li><MDBIcon fas icon="check" className='me-3'/>Unlimited</li>
            <li><MDBIcon fas icon="check" className='me-3'/>sdfg</li>
            <li><MDBIcon fas icon="times" className='me-3'/>zsxdc</li>
          </ul>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn className='text-center text-dark bg-light'>Subscribe</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol md='4' sm='12'>
    <MDBCard background='primary' className='mdb-card'>
      <MDBCardBody className='text-center text-white justify-content-center'>
        <MDBCardTitle className='fs-1'>Startup</MDBCardTitle>
        <MDBCardText>
        <span className='fw-bold fs-2'>10 <MDBIcon fas icon="dollar-sign" /></span><br/>
        <ul>
            <li><MDBIcon fas icon="check" className='me-3'/>Show Contact</li>
            <li><MDBIcon fas icon="check" className='me-3'/>Unlimited</li>
            <li><MDBIcon fas icon="check" className='me-3'/>sdfg</li>
            <li><MDBIcon fas icon="times" className='me-3'/>zsxdc</li>
          </ul>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn className='text-center text-dark bg-light'>Subscribe</MDBBtn>
      </MDBCardBody>
    </MDBCard >
    </MDBCol>
    <MDBCol md='4' sm='12'>
    <MDBCard background='secondary' className='mdb-card'>
      <MDBCardBody className='text-center text-white justify-content-center'>
        <MDBCardTitle className='fs-1'>Pro</MDBCardTitle>
        <MDBCardText>
        <span className='fw-bold fs-2'>20 <MDBIcon fas icon="dollar-sign" /></span><br/>
        <ul>
            <li><MDBIcon fas icon="check" className='me-3'/>Show Contact</li>
            <li><MDBIcon fas icon="check" className='me-3'/>Unlimited</li>
            <li><MDBIcon fas icon="check" className='me-3'/>sdfg</li>
            <li><MDBIcon fas icon="times" className='me-3'/>zsxdc</li>
          </ul>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn className='text-center text-dark bg-light'>Subscribe</MDBBtn>
      </MDBCardBody >
    </MDBCard>
    </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}

export default Card