import React from "react";
import { Link } from "react-router-dom";
// import './Navbar.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center footer-b" color="white">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol sm='12' lg="7" md="6" className="mb-4 mb-md-0">
            <h3 className="follow Footer-text my-3">
              <span>Qabool Hai</span> Best Matrimonial Site
            </h3>
          </MDBCol>

          <MDBCol sm='12' lg="5" md="6" className="mb-4 mb-md-0 follow-icons justify-content-around">
            <h4 className="follow">
              <span>Follow</span> us on
            </h4>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </a>
          </MDBCol>
        </MDBRow>

        <hr />

        <section className="">
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h4 className="text-uppercase follow">About US</h4>

              <p>
                Qabool Hai.com is a registered and trademarked corporation based
                in the USA. We are a leading international matchmaking company
                for singles globally.
              </p>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <h4 className="text-uppercase follow">Need Help</h4>

              <Link to="/contactUs" className="links">
                Contact Us
              </Link>
              <br className="mb-3" />
              <Link to="/PrivacyPolicy" className="links">
                Collecting Data
              </Link>
              <br />
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <h4 className="text-uppercase follow mb-3">Privacy Policy</h4>

              <Link to="/privacyPolicy" className="links">
                Policy
              </Link>
              <br />
              <Link to="/termsOfUse" className="links">
                Terms of Use
              </Link>
              <br />
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <h4 className="text-uppercase follow">Company</h4>

              <Link to="/PrivacyPolicy" className="links">
                Definitions
              </Link>
              <br className="mb-3" />
              <Link to="/PrivacyPolicy" className="links">
                Collecting Data
              </Link>
              <br />
              <Link to="/PrivacyPolicy" className="links">
                Children's Policy
              </Link>
              <br />
              <Link to="/PrivacyPolicy" className="links">
                Changes to Policy
              </Link>
              <br />
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <h4 className="text-uppercase follow">Payment</h4>

              <Link to="/PrivacyPolicy" className="links">
                Definitions
              </Link>
              <br className="mb-3" />
              <Link
                href="/PrivacyPolicy"
                to="/PrivacyPolicy/#def"
                className="links"
              >
                Collecting Data
              </Link>
              <br />
              <Link to="/PrivacyPolicy" className="links">
                Children's Policy
              </Link>
              <br />
              <Link to="/PrivacyPolicy" className="links">
                Changes to Policy
              </Link>
              <br />
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "black" }}>
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Qabool Hai.com
        </a>
      </div>
    </MDBFooter>
  );
}
