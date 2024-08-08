import React, { useState } from "react";
import "../css/Discover.css";
import Nav1 from "./Nav1";
import discoverdata from "../data/Discoverdata";
import { IoChevronDown } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleXmark,
  faStar,
  faGamepad,
  faTv,
  faGraduationCap,
  faFlask,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer";
function Discover() {
  const [inputValue, setInputValue] = useState("");
  const [disdata, setDisdata] = useState(discoverdata);
  const [box, setBox] = useState(false);
  const [originalData, setOriginalData] = useState(discoverdata);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(100 / itemsPerPage); // Since you mentioned a total  items of pages

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = disdata.slice(offset, offset + itemsPerPage);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const filterbycategory = (category) => {
    if (category === "all") {
      setDisdata(originalData);
    } else {
      const filteredData = originalData.filter(
        (pdt) => pdt.category === category
      );
      setDisdata(filteredData);
    }
    setCurrentPage(0); // Reset to the first page when filtering
  };

  const handleSearchClick = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      setDisdata(originalData);
    } else {
      const filteredData = originalData.filter((pdt) =>
        pdt.category.toLowerCase().includes(inputValue.toLowerCase())
      );
      setDisdata(filteredData);
    }
    setCurrentPage(0); // Reset to the first page when searching
  };

  return (
    <>
      <div className="main-discover">
        <div className="dis-bck">
          <Nav1 />

          <h1 className="dis-head">
            FIND YOUR COMMUNITY ON
            <br /> DISCORD
          </h1>
          <p className="dis-para">
            From gaming, to music, to learning, there's a place for you.
          </p>
        </div>

        <div className="row">
          <form className="d-flex justify-content-center">
            <input
              type=" search"
              placeholder="Explore communities"
              className="dis-search"
              value={inputValue}
              onChange={handleChange}
              id="specificInput"
            />
            {inputValue && (
              <button className="clear-button" onClick={clearInput}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
            <button className="srch-btn" onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-lg-8 col-12">
            <div className="row mt-5">
              <div className="col-lg-3  col-12">
                <div className="dis-main-data-1" onClick={() => setBox(!box)}>
                  Categories
                  <span>
                    <IoChevronDown />
                  </span>
                </div>
                {box ? (
                  <div className="category-box">
                    <p
                      onClick={() => {
                        filterbycategory("all");
                        setBox(false);
                      }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      All
                    </p>
                    <p
                      onClick={() => {
                        filterbycategory("game");
                        setBox(false);
                      }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faGamepad} />
                      </span>
                      Gaming
                    </p>
                    <p
                      onClick={() => {
                        filterbycategory("entertainment");
                        setBox(false);
                      }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faTv} />
                      </span>
                      Entertainment
                    </p>
                    <p
                      onClick={() => {
                        filterbycategory("education");
                        setBox(false);
                      }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faGraduationCap} />
                      </span>
                      Education
                    </p>
                    <p
                      onClick={() => {
                        filterbycategory("science");
                        setBox(false);
                      }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faFlask} />
                      </span>
                      Science & Tech
                    </p>
                    <p
                      onClick={() => {
                        filterbycategory("music");
                        setBox(false);
                      }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faMusic} />
                      </span>
                      Music
                    </p>
                  </div>
                ) : null}

                <div
                  className="main-data"
                  onClick={() => filterbycategory("all")}
                >
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    All
                  </p>
                  <p>27662</p>
                </div>
                <div
                  className="main-data"
                  onClick={() => filterbycategory("game")}
                >
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faGamepad} />
                    </span>
                    Gaming
                  </p>
                  <p>20611</p>
                </div>
                <div
                  className="main-data"
                  onClick={() => filterbycategory("entertainment")}
                >
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faTv} />
                    </span>{" "}
                    Entertainment
                  </p>
                  <p>11698</p>
                </div>
                <div
                  className="main-data"
                  onClick={() => filterbycategory("education")}
                >
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                    Education
                  </p>
                  <p>2286</p>
                </div>
                <div
                  className="main-data"
                  onClick={() => filterbycategory("science")}
                >
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faFlask} />
                    </span>
                    Science & Tech
                  </p>
                  <p>2148</p>
                </div>
                <div
                  className="main-data"
                  onClick={() => filterbycategory("music")}
                >
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faMusic} />
                    </span>
                    Music
                  </p>
                  <p>2041</p>
                </div>
              </div>
              <div className="col-lg-9  col-12">
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <>
                      <div className="dis-card" key={index}>
                        <div className="dis-card-position">
                          <div className="dis-pic">
                            <img src={item.pic} alt="dispic" className="" />
                          </div>
                          <div className="dis-card-content">
                            <div className="dis-card-position-1">
                              <img
                                src={item.smpic}
                                alt="dis-pic"
                                className=""
                              />
                              <h6>{item.hed}</h6>
                            </div>
                            <p>{item.detail}</p>
                            <p className="">
                              <span>
                                {item.online}&nbsp;&nbsp;&nbsp;
                                <li>{item.member}</li>
                              </span>
                            </p>
                            <div className="dis-verified">{item.verified}</div>
                          </div>
                        </div>

                        <div className="dis-card-content-1">
                          <div className="d-flex">
                            <img src={item.smpic} alt="dis-pic" className="" />
                            <div>
                              <h6>{item.hed}</h6>
                              <p>{item.detail}</p>
                              <p className="">
                                <span>
                                  {item.online}&nbsp;&nbsp;&nbsp;
                                  <li>{item.member}</li>
                                </span>
                              </p>
                              <div className="dis-verified">
                                {item.verified}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                ) : (
                  <div className="error-page">
                    <img src="err.svg" alt="No content available" />
                    <p>Oh no, there's nothing here!</p>
                  </div>
                )}

                <div className="page-center">
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={totalPages}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages"}
                    previousLinkClassName={"previous"}
                    nextLinkClassName={"next"}
                    pageLinkClassName={"link"}
                    activeLinkClassName={"acti"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="server-bg">
            <h3>Have a server you want to add to Discovery?</h3>
            <button>Make Your Community Public</button>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-lg-5 col-12">
            <div className="dis-left">
              <img src="discover-pic.svg" alt="...." className="dis-svg-pic" />
              <h3>
                Find a place where you
                <br /> belong
              </h3>
              <p>
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>

              <button>Join Discord</button>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="dis-right">
              <img src="discover-pic.svg" alt="...." className="" />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Discover;
