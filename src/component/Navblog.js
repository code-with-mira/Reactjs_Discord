import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Navblog.css";
import { NavLink, useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
function Navblog({ isActive }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="main-navblog">
        <img
          src="https://assets-global.website-files.com/5f8dd67f8fdd6f51f0b50904/613b8fc3834b2bd42157bc04_blogwhite.svg"
          className=""
          alt="logo"
          onClick={() => navigate("/Blog")}
        />

        <ul className="nav">
          <li className="nav-item nvv-link">
            <NavLink
              className="nav-link  "
              style={{ color: isActive ? "white" : "white" }}
              to="/Blog"
            >
              Collactions <FontAwesomeIcon icon={faAngleDown} />
            </NavLink>
            <div className="collaction-menu">
              <p onClick={() => navigate("/Blog/blog-community")}>Community</p>
              <p onClick={() => navigate("/Blog/blog-HQ")}>Discord HQ</p>
              <p onClick={() => navigate("/")}>How To Discord</p>
              <p onClick={() => navigate("/Blog/policy")}>Policy & Saftey</p>
              <p onClick={() => navigate("/Blog/product")}>
                Product & Featured
              </p>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/Blog/blog-featured"
            >
              Featured
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              style={{ color: isActive ? "white" : "white" }}
              to="/"
            >
              Discord.com
            </NavLink>
          </li>
          <li>
            <form>
              <input
                type="search"
                className="insrch"
                id="issearch"
                placeholder="Search"
              />
              <button type="submit" className="out-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </li>
        </ul>

        <div>
          <div className="d-flex">
            <FontAwesomeIcon
              icon={faBars}
              className="bars-1"
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </div>

      <div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="nav-drawer"
          size={280}
        >
          <div className={` header  ${open ? "header-1" : "header"}`}>
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
                <li className="" onClick={() => setMenu(!menu)}>
                  <NavLink className="sm-link" to="/Blog">
                    Collactions <FontAwesomeIcon icon={faAngleDown} />
                  </NavLink>
                  {menu ? (
                    <div className="coll-menu-1">
                      <p onClick={() => navigate("/Blog/blog-community")}>
                        Community
                      </p>
                      <p onClick={() => navigate("/Blog/blog-HQ")}>
                        Discord HQ
                      </p>
                      <p onClick={() => navigate("/")}>How To Discord</p>
                      <p onClick={() => navigate("/Blog/policy")}>
                        Policy & Saftey
                      </p>
                      <p onClick={() => navigate("/Blog/product")}>
                        Product & Featured
                      </p>
                    </div>
                  ) : null}
                </li>
                <li>
                  <NavLink className="sm-link" to="/Blog/blog-featured">
                    Featured
                  </NavLink>
                </li>
                <li>
                  <NavLink className="sm-link" to="/">
                    Discord.com
                  </NavLink>
                </li>
              </ul>
              <form>
                <input
                  type="search"
                  className="sm-input"
                  placeholder="Search"
                />
                <button type="submit" className="dra-btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Navblog;
