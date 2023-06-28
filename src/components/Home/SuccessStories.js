import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

const SuccessStories = () => {
  return (
    <>
      <div className="work-container  container services">
        <h1 className="main-heading text-center">
          {" "}
          <br /> Success Stories
        </h1>
        <br />
      </div>
      <MDBCarousel showIndicators showControls fade className="slider">
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <MDBRow className="your-ssc">
        <MDBCol lg="5" md="12" className="mb-4 mb-md-0 your-ss">
          <h3>Tell us about your Success Stories</h3>

          <Link className="ss-link" to="/successstoryform">
            <MDBBtn rounded className="mb-4 mb-md-0 your-ss-btn">
              Submit
            </MDBBtn>
          </Link>
        </MDBCol>
      </MDBRow>
      <br />
      <br />
    </>
  );
};
export default SuccessStories;
