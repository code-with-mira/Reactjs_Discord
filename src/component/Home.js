import React, { useState } from "react";
import "../css/Home.css";
import Nav1 from "./Nav1";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="wrape-home">
        <div className="main-home">
          <Nav1 />
          <div className="row">
            <div className="main-home-bg">
              <div className="row">
                <div className="col-lg-3 col-12">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4df2dc8d7a9a081ebd_8a8375ab7908384e1fd6efe408284203.svg"
                    alt="...."
                    className="home-pic-1"
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <h1 className="imagine">IMAGINE A PLACE...</h1>
                  <p className="imagine-para">
                    ...where you can belong to a school club, a gaming group, or
                    a worldwide art community. Where just you and a handful of
                    friends can spend time together. A place that makes it easy
                    to talk every day and hang out more often.
                  </p>
                  <div
                    className={`home-btn ${
                      open ? "home-btn-none" : "home-btn"
                    }`}
                  >
                    <button className="home-down-btn">
                      <FontAwesomeIcon icon={faDownload} />
                      &nbsp; Download For Windows
                    </button>
                    <button
                      className="home-dis-btn"
                      onClick={() => setOpen(true)}
                    >
                      Open Discord In Your Browser
                    </button>
                  </div>
                  {open ? (
                    <div className="home-btn-1">
                      <form>
                        <input
                          type="text"
                          className="home-input"
                          placeholder="Enter a Display Name"
                          required
                        />
                        <button type="submit" className="home-submit">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </form>

                      <p>
                        By registering, you agree to Discord's&nbsp;
                        <span>Terms of Service</span>&nbsp;and&nbsp;
                        <span>Privacy Policy.</span>
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="col-lg-3 col-12">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4db9ca0a124b73d4b7_c40c84ca18d84633a9d86b4046a91437.svg"
                    alt="...."
                    className="home-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row home-mrg">
          <div className="col-1"></div>
          <div className="col-lg-5 col-md-5 col-12">
            <img src="home-1.svg" alt="" className="home-pic-2" />
          </div>
          <div className="col-lg-5  col-md-5 col-12">
            <div className="creat-1">
              <h1 className="creat-head">
                Create an invite-only place where you belong
              </h1>
              <p className=" creat-para">
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>
            </div>
          </div>
        </div>
        <div className="row gry">
          <div className="col-1"></div>
          <div className="col-lg-5  col-md-5 col-md-5 col-12">
            <div className="hang-1">
              <h1 className="creat-head">Where hanging out is easy</h1>
              <p className="creat-para">
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </div>
          </div>
          <div className="col-lg-5  col-md-5 col-12">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1b717efff2306ef179e_Where%20hanging%20out%20is%20easy.svg"
              alt="..."
              className="home-pic-3"
            />
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row home-mrg">
          <div className="col-1"></div>
          <div className="col-lg-5  col-md-5 col-12">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1d8348e5c81ca608138_From%20few%20to%20a%20fandom.svg"
              alt=""
              className="home-pic-2"
            />
          </div>
          <div className="col-lg-5  col-md-5 col-12">
            <div className="creat-1">
              <h1 className="creat-head">From few to a fandom</h1>
              <p className=" creat-para">
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="row gry-1">
          <div className="col-2"></div>
          <div className="col-8">
            <h1 className="close-head">RELIABLE TECH FOR STAYING CLOSE</h1>
            <p className="close-para">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c202770f02752be44796_RELIABLE%20TECH%20FOR%20STAYING%20CLOSE.svg"
              alt="...."
              className="home-pic-4"
            />
            <h2 className="ready-head">Ready To Start Your Journey?</h2>
            <div className="d-flex justify-content-center">
              <button className="ready-btn">
                <FontAwesomeIcon icon={faDownload} />
                &nbsp; Download For Windows
              </button>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
