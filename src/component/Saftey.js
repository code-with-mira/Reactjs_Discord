import React from "react";
import "../css/Saftey.css";
import Nav1 from "../component/Nav1";
import ReactPlayer from "react-player/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
function Saftey() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-saftey">
        <div className="saftey-bg">
          <Nav1 />
          <div className="row safe-row-1">
            <div className="col-1"></div>
            <div className="col-lg-5 col-12">
              <h1 className="sf-hd-1">
                DISCORD
                <br /> SAFETY CENTER
              </h1>
              <p className="sf-p-1">
                Discord is the place to hang out with your friends and build
                community around shared interests. We’re committed to creating a
                safe, inclusive and welcoming place.
              </p>
              <p className="sf-p-1">
                That’s why we’re working to make Discord private and safe, by
                design. Learn how to shape the best experience for yourself and
                find the resources you need, whether you’re a teen, parent,
                educator, or long-time Discord user.
              </p>
            </div>
            <div className="col-lg-5 col-12">
              <img src="safe-1.svg" alt="...." className="safe-pic" />
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row safe-row-2">
            <div className="col-lg-4 col-md-4 col-12">
              <button
                className="safe-btn-1"
                onClick={() => navigate("/saftey-library")}
              >
                SAFETY LIBRARY
              </button>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <button
                className="safe-btn-1"
                onClick={() => navigate("/saftey-parent")}
              >
                PRIVACY HUB
              </button>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <button
                className="safe-btn-1"
                onClick={() => navigate("/saftey-parent")}
              >
                PARENT HUB
              </button>
            </div>
          </div>

          <div className="row safe-row-3">
            <div className="col-lg-4 col-md-4 col-12">
              <button
                className="safe-btn-1"
                onClick={() => navigate("/saftey-library")}
              >
                Transparency Hub
              </button>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <button
                className="safe-btn-1"
                onClick={() => navigate("/saftey-parent")}
              >
                Safety News Hub
              </button>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <button
                className="safe-btn-1"
                onClick={() => navigate("/saftey-library")}
              >
                Policy Hub
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="safe-head">Building Safer Spaces</h1>
          <div className="d-flex justify-content-center mb-5">
            <ReactPlayer
              url="https://youtu.be/LvtpbOarcWE"
              controls="true"
              loop="true"
              width="50%"
              height="330px"
              className="safe-video"
            />
          </div>
        </div>

        <div className="row safe-gry">
          <div className="col-2"></div>
          <div className="col-lg-4 col-md-4  col-12">
            <img src="safe-2.svg" alt="...." className="ext-pic-1" />
            <h2>Safety Library</h2>
            <p>
              Everything you could ever want to know about safety on Discord.
              Whether you’re a user, a moderator, or a parent, discover all of
              our tools and resources and how to use them.
            </p>
            <p style={{ fontWeight: "600", cursor: "pointer" }}>
              Explore more
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#5763f0",
                  marginLeft: "10px",
                  fontSize: "17px",
                  position: "relative",
                  top: "3px",
                }}
              />
            </p>
          </div>
          <div className="col-lg-4  col-md-4  col-12">
            <img src="safe-2.svg" alt="...." className="ext-pic-2" />
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row safe-gry">
          <div className="col-2"></div>
          <div className="col-lg-4  col-md-4  col-12">
            <img src="safe-3.svg" alt="...." className="" />
          </div>
          <div className="col-lg-4  col-md-4  col-12">
            <h2>Privacy Hub</h2>
            <p>
              Privacy is an essential part of feeling safe. No matter what, we
              build privacy into our products, and we will always try to let you
              know what's happening where and when. Learn more about what that
              means, including the data we collect and the tools to put you in
              control.
            </p>
            <p style={{ fontWeight: "600", cursor: "pointer" }}>
              Explore more
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#5763f0",
                  marginLeft: "10px",
                  fontSize: "17px",
                  position: "relative",
                  top: "3px",
                }}
              />
            </p>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row safe-gry">
          <div className="col-2"></div>
          <div className="col-lg-4  col-md-4  col-12">
            <img src="safe-4.svg" alt="...." className="ext-pic-1" />
            <h2>Parent Hub</h2>
            <p>
              Learn more about what we’re doing to help your teen stay safer on
              our platform, explore our Family Center tool, and download our
              Parent's Guide to Discord.
            </p>
            <p
              style={{ fontWeight: "600", cursor: "pointer" }}
              onClick={() => navigate("/saftey-library")}
            >
              Explore more
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#5763f0",
                  marginLeft: "10px",
                  fontSize: "17px",
                  position: "relative",
                  top: "3px",
                }}
              />
            </p>
          </div>
          <div className="col-lg-4  col-md-4  col-12">
            <img src="safe-4.svg" alt="...." className="ext-pic-2" />
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row safe-gry">
          <div className="col-2"></div>
          <div className="col-lg-4  col-md-4  col-12">
            <img src="safe-5.svg" alt="...." className="" />
          </div>
          <div className="col-lg-4  col-md-4  col-12">
            <h2>Transparency Hub</h2>
            <p>
              Explore data, trends, and analysis into the work done to help keep
              people on Discord safe. Transparency reports cover information
              about enforcement of our platform policies, as well as our
              response to legal, emergency, and intellectual property removal
              requests.
            </p>
            <p
              style={{ fontWeight: "600", cursor: "pointer" }}
              onClick={() => navigate("/saftey-library")}
            >
              Explore more
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#5763f0",
                  marginLeft: "10px",
                  fontSize: "17px",
                  position: "relative",
                  top: "3px",
                }}
              />
            </p>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row safe-gry">
          <div className="col-2"></div>
          <div className="col-lg-4  col-md-4  col-12">
            <img src="safe-6.svg" alt="...." className="ext-pic-1" />
            <h2>Saftey News Hub</h2>
            <p>
              The latest news and updates on Discord’s Safety, Privacy, and
              Policy initiatives.
            </p>
            <p
              style={{ fontWeight: "600", cursor: "pointer" }}
              onClick={() => navigate("/saftey-library")}
            >
              Explore more
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#5763f0",
                  marginLeft: "10px",
                  fontSize: "17px",
                  position: "relative",
                  top: "3px",
                }}
              />
            </p>
          </div>
          <div className="col-lg-4  col-md-4  col-12">
            <img src="safe-6.svg" alt="...." className="ext-pic-2" />
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row safe-gry">
          <div className="col-2"></div>
          <div className="col-lg-4  col-md-4 col-12">
            <img src="safe-7.svg" alt="...." className="" />
          </div>
          <div className="col-lg-4  col-md-4 col-12">
            <h2>Policy Hub</h2>
            <p>
              Learn about our Community Guidelines, developed to help keep
              people safe and make Discord the best place to hang out with
              friends.
            </p>
            <p style={{ fontWeight: "600", cursor: "pointer" }}>
              Explore more
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#5763f0",
                  marginLeft: "10px",
                  fontSize: "17px",
                  position: "relative",
                  top: "3px",
                }}
              />
            </p>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row safe-gry" style={{ paddingBottom: "70px" }}>
          <div className="col-2"></div>
          <div className="col-lg-4  col-md-4 col-12">
            <img src="safe-8.svg" alt="...." className="ext-pic-1" />
            <h2>Teen Charter</h2>
            <p>
              We work to center youth voices in our product design and policies.
              Now we're collaborating with teens around the world on a charter
              to make Discord a better place  to hang out.
            </p>
            <p style={{ fontWeight: "600", cursor: "pointer" }}>
              Explore more
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  color: "#5763f0",
                  marginLeft: "10px",
                  fontSize: "17px",
                  position: "relative",
                  top: "3px",
                }}
              />
            </p>
          </div>
          <div className="col-lg-4  col-md-4 col-12">
            <img src="safe-8.svg" alt="...." className="ext-pic-2" />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Saftey;
