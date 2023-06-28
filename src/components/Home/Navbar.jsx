import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand="lg" className="back-color fixed-top pt-0">
        <MDBContainer>
          <MDBNavbarBrand  >
          <Link className="Logo1" to="/" role={"button"}>
                  Qabool Hai
                </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 nav-btns">
              <MDBNavbarItem>
                <Link className="home-btn" to="/" role={"button"}>
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="about-btn" to="/about" role={"button"}>
                  About
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="pricing-btn" to="/subscription" role={"button"}>
                  Pricing
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="pricing-btn" to="/users" role={"button"}>
                  Users
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="margin-bot"></div>
    </header>
  );
}
