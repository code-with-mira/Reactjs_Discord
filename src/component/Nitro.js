import React, { useState } from "react";
import Nav1 from "../component/Nav1";
import "../css/Nitro.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accdata from "../data/accordiondata";
import {
  faCloudArrowDown,
  faFaceSmile,
  faFaceGrinWide,
  faStar,
  faVideo,
  faAddressCard,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import tabledata from "../data/nitrotabledata";

import Footer from "../component/Footer";
function Nitro() {
  const [open, setOpen] = useState(false);
  const [cont, setCont] = useState(tabledata);
  const [acc, setAcc] = useState(accdata);
  const [general, setGeneral] = useState(true);
  const [payment, setPayment] = useState(false);
  const [gift, setGift] = useState(false);
  const [other, setOther] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="main-nitro">
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src="/video.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-content">
            <Nav1 />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-lg-5  col-12">
                <div className="un-main">
                  <h1 className="un-head">Unleash more fun with Nitro</h1>
                  <p className="un-para">
                    Subscribe to Nitro to upgrade your emoji,
                    <br /> personalize your profile, share bigger files,
                    <br /> and so much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row nitro-row">
          <div className="col-1"></div>
          <div className="col-lg-5 col-md-5  col-12">
            <div className="nitro-card">
              <h2>Nitro Basic</h2>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faCloudArrowDown} />
                &nbsp;50MB uploads
              </div>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faFaceSmile} />
                &nbsp;Custom emoji anywhere
              </div>

              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faFaceGrinWide} />
                &nbsp;Unlimited Super Reactions
              </div>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;Special Nitro badge on your profile
              </div>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col-lg-5 col-md-5  col-12">
            <div className="nitro-card-2">
              <h2>Nitro</h2>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faCloudArrowDown} />
                &nbsp;500MB uploads
              </div>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faFaceSmile} />
                &nbsp;Custom emoji anywhere
              </div>

              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faFaceGrinWide} />
                &nbsp;Unlimited Super Reactions
              </div>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faVideo} />
                &nbsp;HD video streaming
              </div>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;2 Server Boosts
              </div>
              <div className="nitro-card-dv">
                <FontAwesomeIcon icon={faAddressCard} />
                &nbsp;Custom profiles and more!
              </div>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row nitro-row">
          <h1 className="popular-head">Popular Nitro Perks</h1>
          <div className="col-1"></div>
          <div className="col-lg-5 col-md-5  col-12">
            <div className="ni-card">
              <h3>From clips to pics, share away with bigger file uploads</h3>
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8f1d5429528ae89f64cf0_Clips%20to%20pics.svg"
                alt="...."
                className=""
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5  col-12">
            <div className="ni-card">
              <h3>Stream apps and games in sweet, sweet HD</h3>
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e745e5817574c745fcc0_Stream%20apps.svg"
                alt="...."
                className=""
              />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row nitro-row-2">
          <div className="col-1"></div>
          <div className="col-lg-5 col-md-5  col-12">
            <div className="ni-card">
              <h3>Hype and meme with custom emoji anywhere</h3>
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e7682eab54a3196def6e_Project-Speedy-Emoji-Static.svg"
                alt="...."
                className=""
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="ni-card">
              <h3>Unlock perks for your communities with 2 Server Boosts</h3>
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534f1f0854923a8e9c1_Frame%20881.svg"
                alt="...."
                className=""
              />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        {/* start */}
        {open ? (
          <div>
            {" "}
            <div className="row nitro-row-3">
              <div className="col-lg-4  col-md-4 col-12">
                <div className="ni-card-1">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/642bddb7b79c59faba5c8e45_202302031_PM_NitroAprilDrop_PerkCard_Illustration%201.svg"
                    alt="...."
                    className=""
                  />
                  <h4>Color Themes </h4>
                  <p>Add your vibe to Discord with unique theme colors.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  col-12">
                <div className="ni-card-1">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/656658c8b1bea49eeb08f485_Nitro-Shop-Perk-Card-Asset.svg"
                    alt="...."
                    className=""
                  />
                  <h4>Special Shop Perks </h4>
                  <p>
                    Enjoy member pricing plus Nitro exclusive items in the Shop.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  col-12">
                <div className="ni-card-1">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/633d9e7d8e2320e79fa141a4_Group%20239.svg"
                    alt="...."
                    className=""
                  />
                  <h4>Custom Sounds Everywhere</h4>
                  <p>
                    Use custom sounds and personalized entrance sounds across
                    voice channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="row nitro-row-3">
              <div className="col-lg-4 col-md-4  col-12">
                <div className="ni-card-1">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64539312d8aa8355573759d3_Illustration.svg"
                    alt="...."
                    className=""
                  />
                  <h4>Unlimited Super Reactions </h4>
                  <p>
                    Hype up the chat with action-packed, animated reactions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  col-12">
                <div className="ni-card-1">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/642bde267b2835cd7aea086c_Group.svg"
                    alt="...."
                    className=""
                  />
                  <h4>Unlimited Super Reactions </h4>
                  <p>
                    Enjoy member pricing plus Nitro exclusive items in the Shop.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4  col-12">
                <div className="ni-card-1">
                  <img
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e825ea183f82ff87bea6_More%20Backgrounds.svg"
                    alt="...."
                    className=""
                  />
                  <h4>More Backgrounds</h4>
                  <p>Customize video calls with your own video backgrounds.</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="d-flex justify-content-center">
          <button className="show-perk" onClick={() => setOpen(!open)}>
            {open ? " Show less Perks" : "Show All Perks"}
          </button>
        </div>

        <div className="row nitro-row-4">
          <div className="col-1"></div>
          <div className="col-lg-10  col-12">
            <div className="nitro-table">
              <h1>
                Pick the plan that works
                <br /> best for you
              </h1>

              <div className="tbl-content">
                <div className="nitro-feat content-p">Features</div>
                <div className="content-p-1">
                  <img
                    src="nitro-basic.svg"
                    className="nitro-basic-pic "
                    alt="..."
                  />
                </div>
                <div className="content-p-2">
                  {" "}
                  <img src="nitro.svg" className="nitro-pic " alt="..." />
                </div>
              </div>
              <hr />
              {cont.map((item, index) => {
                return (
                  <>
                    <div className="tbl-content" key={index}>
                      <p className="content-p design">{item.fetatures}</p>
                      <p className="content-p-1 design-1">{item.nitrobasic}</p>
                      <p className="content-p-2 design-1">{item.nitro}</p>
                    </div>
                    <hr />
                  </>
                );
              })}

              <div className="tbl-content">
                <div className="content-p"></div>
                <div className="content-p-1">
                  <button
                    className="nt-btn"
                    onClick={() => navigate("./Login")}
                  >
                    Subscribe Basic
                  </button>
                </div>
                <div className="content-p-2">
                  <button
                    className="nt-btn ntt"
                    onClick={() => navigate("./Login")}
                  >
                    Subscribe Nitro
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row nitro-row-5">
          <h1 className="ask-head">Frequently Asked Questions</h1>
          <div className="nitro-item">
            <div
              className={`nitro-subitem ${
                general ? "nitro-subitem-1" : "nitro-subitem"
              }`}
              onClick={() => {
                setPayment(false);
                setGeneral(true);
                setGift(false);
                setOther(false);
              }}
            >
              General
            </div>
            <div
              className={`nitro-subitem ${
                payment ? "nitro-subitem-1" : "nitro-subitem"
              }`}
              onClick={() => {
                setPayment(true);
                setGeneral(false);
                setGift(false);
                setOther(false);
              }}
            >
              Payments
            </div>
            <div
              className={`nitro-subitem ${
                gift ? "nitro-subitem-1" : "nitro-subitem"
              }`}
              onClick={() => {
                setPayment(false);
                setGeneral(false);
                setGift(true);
                setOther(false);
              }}
            >
              Gifting and Promotions
            </div>
            <div
              className={`nitro-subitem ${
                other ? "nitro-subitem-1" : "nitro-subitem"
              }`}
              onClick={() => {
                setPayment(false);
                setGeneral(false);
                setGift(false);
                setOther(true);
              }}
            >
              Other
            </div>
          </div>

          {general ? (
            <>
              {acc.slice(0, 5).map((item, index) => {
                return (
                  <>
                    <div className="d-flex justify-content-center" key={index}>
                      <div
                        className={`accordn ${
                          openIndex === index ? "accordn-1" : "accordn"
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <div className="row">
                          <div className="col-lg-11 col-md-10 col-10">
                            <p>{item.head}</p>

                            {openIndex === index && (
                              <p className="acc-content">{item.content}</p>
                            )}
                          </div>
                          <div className="col-1">
                            {openIndex === index ? (
                              <div
                                style={{
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  style={{ fontSize: "20px" }}
                                />
                              </div>
                            ) : (
                              <FontAwesomeIcon icon={faPlus} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : null}

          {payment ? (
            <>
              {acc.slice(6, 8).map((item, index) => {
                return (
                  <>
                    <div className="d-flex justify-content-center" key={index}>
                      <div
                        className={`accordn ${
                          openIndex === index ? "accordn-1" : "accordn"
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <div className="row">
                          <div className="col-lg-11 col-md-10 col-10">
                            <p>{item.head}</p>

                            {openIndex === index && (
                              <p className="acc-content">{item.content}</p>
                            )}
                          </div>
                          <div className="col-1">
                            {openIndex === index ? (
                              <div
                                style={{
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  style={{ fontSize: "20px" }}
                                />
                              </div>
                            ) : (
                              <FontAwesomeIcon icon={faPlus} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : null}
          {gift ? (
            <>
              {acc.slice(9, 14).map((item, index) => {
                return (
                  <>
                    <div className="d-flex justify-content-center" key={index}>
                      <div
                        className={`accordn ${
                          openIndex === index ? "accordn-1" : "accordn"
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <div className="row">
                          <div className="col-lg-11 col-md-10 col-10">
                            <p>{item.head}</p>

                            {openIndex === index && (
                              <p className="acc-content">{item.content}</p>
                            )}
                          </div>
                          <div className="col-1">
                            {openIndex === index ? (
                              <div
                                style={{
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  style={{ fontSize: "20px" }}
                                />
                              </div>
                            ) : (
                              <FontAwesomeIcon icon={faPlus} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : null}

          {other ? (
            <>
              {acc.slice(13, 16).map((item, index) => {
                return (
                  <>
                    <div className="d-flex justify-content-center" key={index}>
                      <div
                        className={`accordn ${
                          openIndex === index ? "accordn-1" : "accordn"
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <div className="row">
                          <div className="col-lg-11 col-md-10 col-10">
                            <p>{item.head}</p>

                            {openIndex === index && (
                              <p className="acc-content">{item.content}</p>
                            )}
                          </div>
                          <div className="col-1">
                            {openIndex === index ? (
                              <div
                                style={{
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  style={{ fontSize: "20px" }}
                                />
                              </div>
                            ) : (
                              <FontAwesomeIcon icon={faPlus} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : null}
        </div>

        <div className="row">
          <div className="nitro-bck">
            <div className="d-flex justify-content-between">
              <div className="bck-pic">
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e7c8b60abd235de486e8_Nitro-unleash.svg"
                  alt=""
                  className=""
                />
              </div>
              <div className="bck-content">
                <h1>Unleash the fun with Nitro</h1>
                <button onClick={() => navigate("/Login")}>Subscribe</button>
              </div>
              <div className="bck-pic">
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e7f5699945aa65f8d9f8_Nitro-bg.svg"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nitro;
