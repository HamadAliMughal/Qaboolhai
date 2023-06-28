import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  return (
    <header>
      <div
        className="text-center bg-image"
        style={{ backgroundImage: "url('./img/main-back.jpg')", height: 500 }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100 header-text">
            <div className="text-white">
              <h4 className="mb-3    caption">
                "It's so easy to fall in love but hard to find someone who will
                catch you."
              </h4>

              <Link to="/signin" role={"button"}>
                <MDBBtn rounded className="mx-2 s">
                  Click to Catch
                </MDBBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
