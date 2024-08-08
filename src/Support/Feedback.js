import React, { useState } from "react";
import "./css/Feedback.css";
import feeddata from "./Feeddata.js";
import Nav2 from "../component/Nav2.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Supportfooter from "./Supportfooter.js";
function Feedback() {
  const [feed, setFeed] = useState(feeddata);
  const navigate = useNavigate();
  return (
    <>
      <div className="main-feedback">
        <Nav2 />
        <hr className="fd-hr" />
        <div className="row">
          <div className="col-lg-2 col-12"></div>
          <div className="col-lg-8 col-12">
            <div className="feed-top">
              <p>
                <span onClick={() => navigate("/Support")}>Discord</span>
                &nbsp;&nbsp;
                <FontAwesomeIcon icon={faAngleRight} />
                &nbsp; Feedback
              </p>
              <input
                type="search"
                id="feedinput"
                className=""
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-lg-2 col-12"></div>
        </div>
        <hr className="fd1-hr" />
        <div className="row">
          <div className="community-topic">Community Topics</div>
          <div className="row feed-row">
            {feed.slice(0, 9).map((item, index) => {
              return (
                <>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="community-1" key={index}>
                      <h5>{item.head}</h5>
                      <p>
                        {item.post}&nbsp;Posts &nbsp;&nbsp;{item.follow}
                        &nbsp;Followers
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row feed-row-1">
            {feed.slice(9, 11).map((item, index) => {
              return (
                <>
                  <div className="col-lg-6 col-md-6  col-12">
                    <div className="community-1" key={index}>
                      <h5>{item.head}</h5>
                      <p>
                        {item.post}&nbsp;Posts &nbsp;&nbsp;{item.follow}
                        &nbsp;Followers
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="feed-last">
            <p>Didn't find what you were looking for?</p>
            <button onClick={() => navigate("/Support/Signin")}>
              New Post
            </button>
          </div>
        </div>
      </div>
      <Supportfooter />
    </>
  );
}

export default Feedback;
