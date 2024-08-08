import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Nav2.css";
import { NavLink, useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
function Nav2({ isActive }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [lg, setLg] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="main-nav-1">
        <div className="" onClick={() => navigate("/Support")}>
          <img
            src="https://theme.zdassets.com/theme_assets/678183/cc59daa07820943e943c2fc283b9079d7003ff76.svg"
            alt="logo"
            className=""
          />
          {/* <h5>Discord</h5> */}
        </div>

        <ul className="nav">
          <li className="nav-item">
            <NavLink
              className="nav-link lnk-1 "
              style={{
                color: isActive ? "rgb(60, 92, 237)" : "rgb(60, 92, 237)",
              }}
              to="/Support/feedback"
            >
              Feedback
            </NavLink>
          </li>
          <li className="nav-item mn-lg" onClick={() => setLg(!lg)}>
            <NavLink
              className="nav-link lnk-1 "
              style={{
                color: isActive ? "rgb(60, 92, 237)" : "rgb(60, 92, 237)",
              }}
              to="/Support"
            >
              English (US) <FontAwesomeIcon icon={faAngleDown} />
            </NavLink>
            {lg ? (
              <div className="main-language">
                <p>English</p>
                <p>Español (Latinoamérica)</p>
                <p>Sanskrit</p>
                <p>Deustch</p>
                <p>Italiano</p>
                <p>Polski</p>
                <p>Francais</p>
                <p>Svenska</p>
                <p>Nederlands </p>
                <p>Italiano</p>
                <p>Hindi</p>
              </div>
            ) : null}
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link lnk-1"
              style={{
                color: isActive ? "rgb(60, 92, 237) " : " rgb(60, 92, 237)",
              }}
              to="/Support/submit"
            >
              Submit a request
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link lnk-1"
              style={{
                color: isActive ? "rgb(60, 92, 237) " : " rgb(60, 92, 237)",
              }}
              to="/Support/signin"
            >
              Sign in
            </NavLink>
          </li>
        </ul>

        <div className="sign-nav-1">
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            onClick={toggleDrawer}
          />
          <button className="sign-btn" onClick={() => navigate("/Signin")}>
            Sign in
          </button>
        </div>
      </div>

      {/* Start Drawer */}
      <div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="top"
          className="nav-drawe-1"
          size={200}
        >
          <div>
            <div className="main-nav-2">
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  color: "rgb(60, 92, 237)",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
                onClick={toggleDrawer}
              />
              <ul>
                <li>
                  <NavLink
                    className="sm-link-1"
                    to="/Feedback"
                    style={{
                      color: isActive
                        ? "rgb(60, 92, 237) "
                        : " rgb(60, 92, 237)",
                      textDecoration: isActive ? "none" : "none",
                    }}
                  >
                    Feedback
                  </NavLink>
                </li>
                <li className="mn-lg" onClick={() => setLg(!lg)}>
                  <NavLink
                    className="sm-link-1"
                    to=""
                    style={{
                      color: isActive
                        ? "rgb(60, 92, 237) "
                        : " rgb(60, 92, 237)",
                      textDecoration: isActive ? "none" : "none",
                    }}
                  >
                    English (US) <FontAwesomeIcon icon={faAngleDown} />
                  </NavLink>
                  {lg ? (
                    <div className="main-language">
                      <p>English</p>
                      <p>Español (Latinoamérica)</p>
                      <p>Sanskrit</p>
                      <p>Deustch</p>
                      <p>Italiano</p>
                      <p>Polski</p>
                      <p>Francais</p>
                      <p>Svenska</p>
                      <p>Nederlands </p>
                      <p>Italiano</p>
                      <p>Hindi</p>
                    </div>
                  ) : null}
                </li>
                <li>
                  <NavLink
                    className="sm-link-1"
                    to="/Submit"
                    style={{
                      color: isActive
                        ? "rgb(60, 92, 237) "
                        : " rgb(60, 92, 237)",
                      textDecoration: isActive ? "none" : "none",
                    }}
                  >
                    Submit a request
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Nav2;
