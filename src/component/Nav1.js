import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faDownload,
  faAngleRight,
  faAngleLeft,

} from "@fortawesome/free-solid-svg-icons";

import "../css/Nav1.css";
import { NavLink, useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
function Nav1({ isActive }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const logout = () => {
    localStorage.clear();
   window.location.reload();
  };
  const auth = localStorage.getItem("user")
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="main-nav">
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
          alt="...."
          className="main-nv-pic"
          onClick={() => navigate("/")}
        />

        <ul className="nav">
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Download"
            >
              Download
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Nitro"
            >
              Nitro
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Discover"
            >
              Discover
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Saftey"
            >
              Saftey
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Support"
            >
              Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Careers"
            >
              Careers
            </NavLink>
          </li>
        </ul>
        <div>
          <div className="d-flex">
            <button className="log-btn" onClick={logout}>
              Logout
            </button>

            <FontAwesomeIcon
              icon={faBars}
              className="brr"
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </div>

      {/* 
           <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625eb604bb8605784489d361_Discord-Logo%2BWordmark-Color%20(1).png"
            loading="lazy"
            alt="Click for home"
            class="discord-blue"
          />  */}

      <div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="nav-drawer"
          size={280}
        >
          <div className={` headerd  ${open ? "headerd-1" : "headerd"}`}>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d377b13ff484638adb92_svg7.svg"
                  loading="lazy"
                  alt="Click for home"
                  className="discord-black"
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={toggleDrawer}
                  style={{ fontSize: "22px", cursor: "pointer" }}
                />
              </div>
            </div>
            <hr style={{ color: "gray" }} />
            <div className="">
              <ul>
                <li>
                  {" "}
                  <NavLink className="sm-link" to="/Download">
                    Download
                  </NavLink>
                </li>
                <li>
                  <NavLink className="sm-link" to="/Nitro">
                    Nitro
                  </NavLink>
                </li>
                <li>
                  <NavLink className="sm-link" to="/Discover">
                    Discover
                  </NavLink>
                </li>
                <li>
                  <NavLink className="sm-link" to="/Saftey">
                    Saftey
                  </NavLink>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{
                      marginLeft: "150px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(true)}
                  />
                </li>
                <li>
                  <NavLink className="sm-link" to="/Support">
                    Support
                  </NavLink>
                </li>
                <li>
                  <NavLink className="sm-link" to="/Blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink className="sm-link" to="/Careers">
                    Careers
                  </NavLink>
                </li>
              </ul>

              <button className="sm-nav-btn">
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                  <div className="col-9">Download</div>
                </div>
              </button>
            </div>
          </div>

          <div className={`interd ${open ? "interd" : "interd-1"}`}>
            <div onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faAngleLeft} />
              &nbsp;Back
            </div>
            <h6 style={{ marginTop: "8px" }}>Saftey Center</h6>
            <p>Overview</p>
            <h5>Controlling Your Experience</h5>
            <p className="drawer-link">Four steps to a super safe account</p>
            <p className="drawer-link">Four steps to a super safe server</p>
            <p className="drawer-link">
              Role of administrators and moderators on Discord
            </p>
            <p className="drawer-link">Reporting problems to Discord</p>
            <p className="drawer-link">Mental health on Discord</p>
            <p className="drawer-link">Age-Restricted Content on Discord</p>
            <p className="drawer-link">Tips against spam and hacking</p>

            <h6 style={{ marginTop: "8px" }}>Parents &amp; Educators</h6>
            <p className="drawer-link">What is Discord?</p>
            <p className="drawer-link">
              Discord's commitment to a safe and trusted experience
            </p>
            <p className="drawer-link">
              Helping your teen stay safe on Discord
            </p>
            <p className="drawer-link">
              Talking about online safety with your teen
            </p>
            <p className="drawer-link">
              Answering parents' and educators' top questions
            </p>
            <p className="drawer-link">If your teen encounters an issue</p>
            <p className="drawer-link">
              Working with CARU to protect users on Discord
            </p>

            <h6 style={{ marginTop: "8px" }}>How We Enforce Rules</h6>
            <p className="drawer-link">Our policies</p>
            <p className="drawer-link">How we investigate</p>
            <p className="drawer-link">What actions we take</p>
            <p className="drawer-link">How you can appeal our actions</p>
            <p className="drawer-link">Discord's Transparency Reports</p>
            <p className="drawer-link">Working with law enforcement</p>

            <button className="sm-nav-btn" style={{ marginTop: "25px" }}>
              <div className="row">
                <div className="col-3">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <div className="col-9">Download</div>
              </div>
            </button>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Nav1;
