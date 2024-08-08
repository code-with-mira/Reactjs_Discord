import React, { useState, useEffect } from "react";
import "./css/Parent.css";
import Nav1 from "../component/Nav1";
import Parentslide from "./Parentslide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import acdn from "./Parentdata";
import Footer from "../component/Footer";
function Parent() {
  const [accordion, setAccordion] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(acdn)) {
      setAccordion(acdn);
    } else {
      console.error("acdn is not an array:", acdn);
    }
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="parent-main">
        <div className="bg-parent">
          <Nav1 />
          <div className="row parent-row">
            <p className="bg-par-p">
              <span onClick={() => navigate("/Saftey")}>
                Discord Safety Center
              </span>
              &nbsp;
              <FontAwesomeIcon icon={faAngleRight} />
              &nbsp; Parent Hub
            </p>

            <div className="col-1"></div>
            <div className="col-lg-5 col-12">
              <h1>
                SAFETY <br />
                LIBRARY
              </h1>
              <p className="safe-para">
                Everything you could ever want to know about safety on Discord.
                Whether you’re a user, a moderator, or a parent, discover all of
                our tools and resources and how to use them.
              </p>
            </div>
            <div className="col-lg-5 col-12">
              <img src="parent.svg" className="bg-parent-pics" alt="...." />
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-lg-5 col-12">
            <h1 className="parent-head">How Your Teen Uses Discord</h1>
            <p className="parent-para">
              Discord is about hanging out with friends in real time. It's a
              place where people can be themselves and spend time with others
              who share their interests and hobbies. Keep reading to learn how
              your teen can use Discord to talk and hang out with their
              communities and friends.
            </p>
            <img src="parent-1.svg" className="pr-pic" alt="parent" />
          </div>
          <div className="col-lg-5 col-12">
            <div className="main-accordion">
              {accordion &&
                accordion.slice(0, 3).map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <div className="parent-accordion">
                          <div className="d-flex">
                            <div className="line"></div>
                            <div>
                              <h4 onClick={() => handleToggle(index)}>
                                {item.hed}
                              </h4>
                              {openIndex === index && (
                                <p className="">{item.paragraph}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <h1 className="parent-second">Resources for Parents and Educators</h1>
          <Parentslide />
        </div>

        <div className="row acc-row-2">
          <div className="col-1"></div>

          <div className="col-lg-5 col-12">
            <div className="main-accordion mca-1">
              {accordion &&
                accordion.slice(3, 6).map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <div className="parent-accordion">
                          <div className="d-flex">
                            <div className="line"></div>
                            <div>
                              <h4 onClick={() => handleToggle(index)}>
                                {item.hed}
                              </h4>
                              {openIndex === index && (
                                <p className="">{item.paragraph}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <h1 className="parent-head">Our Approach to Content Moderation</h1>
            <p className="parent-para">
              Discord is about hanging out with friends in real time. It's a
              place where people can be themselves and spend time with others
              who share their interests and hobbies. Keep reading to learn how
              your teen can use Discord to talk and hang out with their
              communities and friends.
            </p>
            <img src="parent-2.svg" className="pr-pic" alt="parent" />
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-lg-5 col-12">
            <h1 className="parent-head">Reporting on Discord</h1>
            <p className="parent-para">
              Discord is about hanging out with friends in real time. It's a
              your teen can use Discord to talk and hang out with their
              communities and friends.
            </p>
            <img src="parent-3.svg" className="pr-pic" alt="parent" />
          </div>

          <div className="col-lg-5 col-12">
            <div className="main-accordion">
              {accordion &&
                accordion.slice(6, 10).map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <div className="parent-accordion">
                          <div className="d-flex">
                            <div className="line"></div>
                            <div>
                              <h4 onClick={() => handleToggle(index)}>
                                {item.hed}
                              </h4>
                              {openIndex === index && (
                                <p className="">{item.paragraph}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>

          <div className="col-1"></div>
        </div>

        <div className="row parent-row-1">
          <div className="col-1"></div>
          <div className="col-lg-5 col-12">
            <img src="parent-4.svg" className="pr-pic-2" alt="....." />
          </div>
          <div className="col-lg-5 col-12">
            <h1 className="">Family Center</h1>
            <p>
              Family Center is designed to help you learn more about how your
              teen spends their time on Discord and learn more about the
              communities they are a part of.
            </p>
            <p>
              Our goal is to help families foster productive dialogue about
              safer internet habits, and to create mutually beneficial ways for
              parents and teens to connect about experiences online.
            </p>
            <button>Explore More</button>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row parent-row-2">
          <div className="parent-2">
            <h1>Parent’s Guide to Discord</h1>
            <p>
              Our friends at the NationalPTA, ConnectSafely, and Thorn have
              leveraged their expertise working with families to create their
              own parent guides to Discord. Consider checking them out for
              another view on how your teen uses Discord, our safety tools, and
              ways to start conversations about online safety.
            </p>
            <button>Build Up and Belong - PTA Connected - Programs</button>
            <button>Thorn for Parents</button>
            <button>Connect Safely Parent Guide to Discord</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Parent;
