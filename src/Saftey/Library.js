import React, { useState } from "react";
import "./css/Library.css";
import Nav1 from "../component/Nav1";
import librarydata from "./Librarydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function Library() {
  const [op, setOp] = useState(true);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const getFilteredData = () => {
    if (selectedCategories.length === 0) {
      return librarydata;
    }
    return librarydata.filter((item) =>
      selectedCategories.includes(item.category)
    );
  };

  const categories = Array.from(
    new Set(librarydata.map((item) => item.category))
  );

  return (
    <>
      <div className="main-library">
        <div className="bg-library">
          <Nav1 />
          <div className="row libe-row">
            <p className="bg-lb-para">
              <span onClick={() => navigate("/Saftey")}>
                Discord Safety Center
              </span>
              &nbsp;
              <FontAwesomeIcon icon={faAngleRight} />
              &nbsp; Safety Library
            </p>
            <div className="col-1"></div>
            <div className="col-lg-5 col-md-5  col-12">
              <h1 className="bg-lb-hd">
                SAFETY <br />
                LIBRARY
              </h1>
              <p className="safe-para">
                Everything you could ever want to know about safety on Discord.
                Whether you’re a user, a moderator, or a parent, discover all of
                our tools and resources and how to use them.
              </p>
            </div>
            <div className="col-lg-5 col-md-5  col-12">
              <img src="libe-1.svg" className="library-pic-one" alt="...." />
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="row  wrap-row mt-5">
          <div className="col-lg-2  col-12"></div>
          <div className="col-lg-2 col-md-6  col-12">
            <iframe
              width="100%"
              height="310px"
              src="https://www.youtube.com/embed/U6AlbG2ZoKs"
              title="Discord Warning System"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2  col-md-6  col-12">
            <iframe
              width="100%"
              height="310px"
              src="https://www.youtube.com/embed/kw1rKOo6cWA"
              title="Discord Teen Safety Assist"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <iframe
              width="100%"
              height="310px"
              src="https://www.youtube.com/embed/dMhdGErYnpI"
              title="Discord Server Profiles"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2 col-md-6  col-12">
            <iframe
              width="100%"
              height="310px"
              src="https://www.youtube.com/embed/PA44gX6Lv9c"
              title="Discord DM Filters and Message Requests"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2  col-12 "></div>
        </div>

        <div className="row wrap   wrap-row" style={{ marginBottom: "20px" }}>
          <div className="col-lg-2  col-12"></div>
          <div className="col-lg-2 col-md-6 col-12">
            <iframe
              width="100%"
              height="310"
              src="https://www.youtube.com/embed/O55jLpSGCho"
              title="How to block on Discord"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <iframe
              width="100%"
              height="310"
              src="https://www.youtube.com/embed/h_XBY9Mpdxg"
              title="How to mute on Discord"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2 col-md-6  col-12">
            <iframe
              width="100%"
              height="310"
              src="https://www.youtube.com/embed/MGFTU6-LYC4"
              title="How to report on Discord"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <iframe
              width="100%"
              height="310"
              src="https://www.youtube.com/embed/_Jb_cRY9p3E"
              title="Discord Safety Alerts in Chat"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="library-video"
            ></iframe>
          </div>
          <div className="col-lg-2  col-12"></div>

          <div className="overlay">
            {op ? (
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/652551c46d30dd5264cfb2b6_safeti-video-bg-p-1600.png"
                alt="...."
                className=""
              />
            ) : null}
            {op ? (
              <button className="show-video" onClick={() => setOp(false)}>
                Show More
              </button>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="solid-text">
            <div className="slide-text">
              <h1 className="sd-text">Privacy</h1>
            </div>
            <div className="slide-text">
              <h1 className="pink-text">Saftey</h1>
            </div>
            <div className="slide-text">
              <h1 className="sd-text">Moderation</h1>
            </div>
            <div className="slide-text">
              <h1 className="pink-text">Policy</h1>
            </div>
          </div>
        </div>

        <div className="row topic-row">
          <h4 className="text-center fw-bold mb-3">Topics</h4>
          <div className="tpc">
            {categories.slice(0, 5).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={
                  selectedCategories.includes(category) ? "active-tpc" : "tpc-1"
                }
              >
                {category}
              </button>
            ))}
          </div>
          <div className="tpc">
            {categories.slice(5, 10).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={
                  selectedCategories.includes(category) ? "active-tpc" : "tpc-1"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="safty-top">
            <h2>Safety Library</h2>
            <form>
              <input
                type="search"
                className="safty-srch"
                placeholder="search..."
              />
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
        <div className="row lib-row-1">
          {getFilteredData().map((item, index) => {
            return (
              <>
                <div className="col-lg-4 col-md-6  col-12">
                  <div className="library-data" key={index}>
                    <img src={item.pc} className="" alt="...." />
                  </div>
                  <div className="libraryfetchdata">
                    <div className="safe-bold">Saftey</div>
                    <h6 className="safe-h">{item.head}</h6>
                    <div className="d-flex ms-2">
                      <div className="sf-one">{item.one}</div>
                      <div className="sf-one">{item.two}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Library;
