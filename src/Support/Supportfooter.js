import React from "react";
import "./css/Supportfooter.css";
import { useNavigate, Link } from "react-router-dom";
import { TiWorld } from "react-icons/ti";
import { FaGoogleDrive } from "react-icons/fa";
import { PiNumberZeroBold } from "react-icons/pi";
import { GrAndroid } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Supportfooter() {
  const navigate = useNavigate();
  return (
    <>
      <div className="supportfoot-main">
        <div className="back-support-foot">
          <div className="d-flex justify-content-center">
            <button className="learn-more" onClick={() => navigate("/")}>
              Learn More
            </button>
          </div>
          <div className="row sup-foot-row">
            <div className="col-lg-3 col-md-3  foot-center col-12">
              <div className="ft-1" onClick={() => navigate("/Login")}>
                <TiWorld />
                <FaGoogleDrive />
                <PiNumberZeroBold />
              </div>
            </div>
            <div className="col-lg-3 col-md-3  foot-center col-12">
              <div className="">
                <Link
                  to="https://play.google.com/store/apps/details?id=com.discord"
                  className="ft-2"
                >
                  <GrAndroid />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3  foot-center col-12">
              <div className="">
                <Link
                  className="ft-3"
                  to="https://apps.apple.com/us/app/discord-chat-talk-hangout/id985746746"
                >
                  <FaApple />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3  foot-center col-12">
              <Link className="ft-4" to="">
                <FaSquareXTwitter />
              </Link>

              <Link className="ft-5" to="">
                <FaWindows />
              </Link>
            </div>
          </div>
          <div className="row sup-foot-row-1">
            <div className="col-2"></div>
            <div className="col-lg-8 col-12">
              <div className="row">
                <hr
                  style={{
                    color: "white",
                    marginTop: "30px",
                    marginBottom: "50px",
                  }}
                />
                <div className="col-lg-4 col-md-4 col-12">
                  <img
                    src="https://theme.zdassets.com/theme_assets/678183/2a944f43170f2222e136854fe9c9e2c9ea6a1971.svg"
                    className="support-foot-logo"
                    alt="logo"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <p
                    className="sup-foot-link"
                    onClick={() => navigate("/Download")}
                  >
                    Download
                  </p>
                  <p
                    className="sup-foot-link"
                    onClick={() => navigate("/Support")}
                  >
                    Help & Support
                  </p>
                  <p
                    className="sup-foot-link"
                    onClick={() => navigate("/Support/feedback")}
                  >
                    Feedback
                  </p>
                  <p className="sup-foot-link">Status</p>
                </div>

                <div className="col-lg-4 col-md-4 col-12">
                  <p className="sup-foot-link">Company</p>
                  <p className="sup-foot-link">Jobs</p>

                  <p
                    className="sup-foot-link"
                    onClick={() => navigate("/Blog")}
                  >
                    Blog
                  </p>
                  <p className="sup-foot-link-1">
                    <span>Terms</span> & <span>Policy</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supportfooter;
