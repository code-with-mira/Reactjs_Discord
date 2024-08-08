import React, { useState } from "react";
import "../css/Download.css";
import Nav1 from "./Nav1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer";
function Download() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className="wrap-download">
        <div className="main-download">
          <Nav1 />
          <div className="row wrap-get">
            <div className="col-1"></div>
            <div className="col-lg-5 col-md-5 col-12 ">
              <h1 className="get-head">
                GET DISCORD
                <br /> FOR ANY DEVICE
              </h1>
              <p className="get-para">
                An adventure awaits. Hang out with your friends on our desktop
                app and keep the conversation going on mobile.
              </p>
              <div className="disco-0">
                <button className="down-btn">
                  <FontAwesomeIcon icon={faDownload} />
                  &nbsp; Download For Windows
                </button>
                <div className="windo">Windows 10 or higher</div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582bf5c02e1d4067ddb99c9_window.svg"
                alt="...."
                className="down-pic"
              />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        <div className="row card-row">
          <div className="col-1"></div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="main-card">
              <h2 className="card-head">iOS</h2>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <button className="down-btn-1">Download</button>
                <img src="fone-2.png" alt="...." className="card-img-1" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="main-card-1">
              <h2 className="card-head">Android</h2>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <button className="down-btn-1">Download</button>
                <img src="fone-1.png" alt="...." className="card-img-1" />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row card-row-2">
          <div className="col-1"></div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="main-card-2">
              <h2 className="card-head">Linux</h2>
              <div className="d-flex justify-content-center flex-column align-items-center position-relative">
                <button className="down-btn-1" onClick={() => setOpen(!open)}>
                  Download&nbsp; <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {open ? (
                  <div className="drop-box">
                    <button>deb</button>
                    <br />
                    <button>tar.gz</button>
                  </div>
                ) : null}

                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582bf1bfda01c6891c3931d_linux.svg"
                  alt="...."
                  className={`card-img-1 ${open ? "card-img-2" : "card-img-1"}`}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="main-card-3">
              <h2 className="card-head">Mac</h2>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <button className="down-btn-1">Download</button>
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582bed9ac055daeab0fd7d9_Mac-2.svg"
                  alt="...."
                  className="card-img-1"
                />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row card-row-3">
          <div className="col-1"></div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="main-card-2 ">
              <h2 className="card-head">Feeling experimental?</h2>
              <p className="card-para">
                Try our Public Test Build and test new features before they
                launch.
              </p>
              <div className="cmd">
                <button
                  className="card-main-btn"
                  onClick={() => setOpen1(!open1)}
                >
                  Download Public Test Build&nbsp;
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            {open1 ? (
              <div className="d-flex justify-content-center">
                <div className="drop-box-1">
                  <button>Mac</button>
                  <button>Linux deb</button>
                  <button>Linux tar.gz</button>
                  <button>Windows 64-bit</button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-lg-5 col-md-5  col-12">
            <div className="main-card-3">
              <h2 className="card-head">From the archives:</h2>
              <p className="card-para">
                Windows 7/8/8.1 and Windows 32-bit users can download official,
                but unsupported clients here.
              </p>
              <div className="cmd">
                <button
                  className="card-main-btn"
                  onClick={() => setOpen2(!open2)}
                >
                  Download&nbsp;
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            {open2 ? (
              <div className="d-flex justify-content-center">
                <div className="drop-box-1">
                  <button>
                    Windows 7/8/8.1 (Available until June 15, 2024)
                  </button>
                  <button>
                    Windows 32-bit (Available until July 15, 2024)
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Download;
