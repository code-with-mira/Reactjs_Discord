import React, { useState } from "react";

import "../css/Career.css";
import Nav1 from "./Nav1";
import careerdata from "../data/Careerdata";
import Careerslide from "../Careerslide";
import careercontent from "../data/Careercontent";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import Careersld2 from "../Careersld2";
function Careers() {
  const [cdata, setCdata] = useState(careerdata);
  const [cnt, setCnt] = useState(careercontent);
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [comunication, setComunication] = useState(true);
  const [consumer, setConsumer] = useState(true);
  const [coretech, setCoretech] = useState(true);
  const [dataplatform, setDataplatform] = useState(true);
  const [security, setSecurity] = useState(true);
  const [trust, setTrust] = useState(true);
  const [product, setProduct] = useState(true);
  return (
    <>
      <div className="main-career">
        <div className="bg-career">
          <Nav1 />
          <div className="row cc-row">
            <h1>WORK AT DISCORD</h1>
            <p className="career-prg">
              Discord is home to (com) passionate people who believe in our
              mission of creating
              <br /> space for everyone to find belonging.
            </p>

            <div className="part-1">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b63f3df6f93ab9880b1e47_discord-new-1-p-500.webp"
                className="pc-1"
                alt="...."
              />
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b640ca9dad7b8061980c0a_Discord-hero-4.webp"
                className="pc-2"
                alt="...."
              />
            </div>
            <div className="part-2">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b63fb1cf2b8b7a17cd6c96_discord-hero2-p-800.webp"
                className="pc-3"
                alt="...."
              />
            </div>
            <div className="part-3">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b6405f2000571e3627276a_discord-hero-3.webp"
                className="pc-4"
                alt="...."
              />
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b64113cf2b8b7a17cf39a2_discord-hero-5.webp"
                className="pc-5"
                alt="...."
              />
            </div>
          </div>
        </div>
        <div className="row career-row">
          <h1>Come build belonging with us</h1>
          <p>
            Discord is working toward an inclusive world where no one feels like
            an outsider, where genuine human connection is a click, text chat,
            or voice call away. A place where everyone can find belonging.
            Challenging? Heck yes. Rewarding? Double heck yes. It’s a mission
            that gives us the chance to positively impact millions of people all
            over the world.
          </p>
          <p>
            ‍ So if this strikes a chord, and you’re equally comfortable
            communicating in memes and gifs as you are in code or decks, come
            build belonging with us!
          </p>
        </div>
        <div className="row career-row-2">
          <div className="col-1"></div>
          <div className="col-lg-5 col-12">
            <h4>Work with people who care.</h4>
            <p>
              Our people, much like our users, can’t be put in a box. The quirky
              and unique cast of characters that work together at Discord may be
              intrepid travelers from all walks of life, but there’s a reason
              we’ve all ended up here. We care about each other, the work we do,
              and the future we’re building — like, a lot. We pull our own
              weight and treat each other with extreme empathy.
              <strong> No cogs or jerks allowed.</strong>
            </p>
          </div>
          <div className="col-lg-5 col-12">
            <div className="d-flex justify-content-center aligns-item-center">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b64166f4775a8c6a0da830_discord-6.webp"
                className="career-right"
                alt="....."
              />
            </div>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row career-row-2">
          <div className="col-1"></div>

          <div className="col-lg-5 col-12 extra-career-pic">
            <div className="d-flex justify-content-center aligns-item-center">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b641a75f62aa79d060a011_Discord-7.webp"
                className="career-right"
                alt="....."
              />
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <h4>Join a culture that builds belonging.</h4>
            <p>
              Imagine a workplace where everyone belongs. At Discord, we aren't
              just imagining this place, we’re creating it. We’re building an
              inclusive, diverse, and welcoming space that reflects the world we
              live, play, and work in — because we know that with diversity
              comes better ideas, a better product, a better work environment,
              and ultimately a better company.
            </p>
          </div>
          <div className="col-lg-5 col-12 extra-career-pic-1">
            <div className="d-flex justify-content-center aligns-item-center">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/64b641a75f62aa79d060a011_Discord-7.webp"
                className="career-right"
                alt="....."
              />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="career-gry">
            <div>
              <h3>Internships</h3>
              <p>
                Join us for an unforgettable summer at Discord! You’ll be
                working on real features that impact millions of people, receive
                close mentorship, and learn from leaders in the industry. We are
                looking for undergraduate and graduate students of all levels.
                Check out our listings, and&nbsp;
                <span style={{ color: "#3e4ceb" }}>
                  read more about our program.
                </span>
              </p>
            </div>
            <div>
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/654bbb64d02bb8995d561787_interns-2%20(1)-p-500.webp"
                className=""
                alt="...."
              />
            </div>
          </div>
        </div>
        <div className="row career-row-3">
          <h2>What to find out more?</h2>
          <p>
            Check out our inclusion, diversity and purpose efforts, or learn
            more about the Life @ Discord experience!
          </p>
        </div>

        <div className="row">
          <div className="bg-2">
            <h1 className="career-head">
              We'd love to work with someone like you.
            </h1>
            <h3>Filters</h3>
            <div className="career-filter-btns">
              <button
                onClick={() => {
                  setActive(true);
                  setComunication(true);
                  setConsumer(true);
                  setCoretech(true);
                  setDataplatform(true);
                  setProduct(true);
                  setSecurity(true);
                  setTrust(true);
                }}
              >
                Featured
              </button>
              <button
                onClick={() => {
                  setActive(true);
                  setComunication(false);
                  setConsumer(false);
                  setCoretech(false);
                  setDataplatform(false);
                  setProduct(false);
                  setSecurity(false);
                  setTrust(false);
                }}
              >
                Activities Platform
              </button>
              <button
                onClick={() => {
                  setActive(false);
                  setComunication(true);
                  setConsumer(false);
                  setCoretech(false);
                  setDataplatform(false);
                  setProduct(false);
                  setSecurity(false);
                  setTrust(false);
                }}
              >
                communications & PR
              </button>
              <button
                onClick={() => {
                  setActive(false);
                  setComunication(false);
                  setConsumer(true);
                  setCoretech(false);
                  setDataplatform(false);
                  setProduct(false);
                  setSecurity(false);
                  setTrust(false);
                }}
              >
                Consumer Marketing
              </button>
              <button
                onClick={() => {
                  setActive(false);
                  setComunication(false);
                  setConsumer(false);
                  setCoretech(true);
                  setDataplatform(false);
                  setProduct(false);
                  setSecurity(false);
                  setTrust(false);
                }}
              >
                Core Tech Engineering
              </button>
            </div>
            <div className="career-filter-btns">
              <button
                onClick={() => {
                  setActive(false);
                  setComunication(false);
                  setConsumer(false);
                  setCoretech(false);
                  setDataplatform(true);
                  setProduct(false);
                  setSecurity(false);
                  setTrust(false);
                }}
              >
                Data Platform Engineering
              </button>
              <button
                onClick={() => {
                  setActive(false);
                  setComunication(false);
                  setConsumer(false);
                  setCoretech(false);
                  setDataplatform(false);
                  setProduct(false);
                  setSecurity(true);
                  setTrust(false);
                }}
              >
                Security
              </button>
              <button
                onClick={() => {
                  setActive(false);
                  setComunication(false);
                  setConsumer(false);
                  setCoretech(false);
                  setDataplatform(false);
                  setProduct(false);
                  setSecurity(false);
                  setTrust(true);
                }}
              >
                Trust and Saftey
              </button>
              <button
                onClick={() => {
                  setActive(false);
                  setComunication(false);
                  setConsumer(false);
                  setCoretech(false);
                  setDataplatform(false);
                  setProduct(true);
                  setSecurity(false);
                  setTrust(false);
                }}
              >
                Product Design
              </button>
            </div>

            {active ? (
              <div className="row career-1">
                <h1>Activities Platform</h1>
                {cdata.slice(0, 1).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex justify-content-between">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6286368c5f5cc306ac2a4672_Jobs%20and%20Career%20Opportunities%20at%20Discord-2%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}

            {comunication ? (
              <div className="row career-1">
                <h1>Communications & PR</h1>
                {cdata.slice(1, 2).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex justify-content-between">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6286368c5f5cc306ac2a4672_Jobs%20and%20Career%20Opportunities%20at%20Discord-2%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}

            {consumer ? (
              <div className="row career-1">
                <h1>Consumer Marketing</h1>
                {cdata.slice(2, 4).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex ">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6286368c5f5cc306ac2a4672_Jobs%20and%20Career%20Opportunities%20at%20Discord-2%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}

            {coretech ? (
              <div className="row career-1">
                <h1>Core Tech Engineering</h1>
                {cdata.slice(4, 7).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex ">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6286368c5f5cc306ac2a4672_Jobs%20and%20Career%20Opportunities%20at%20Discord-2%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}

            {dataplatform ? (
              <div className="row career-1">
                <h1>Data Platform Engineering</h1>
                {cdata.slice(7, 10).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex ">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6286368c5f5cc306ac2a4672_Jobs%20and%20Career%20Opportunities%20at%20Discord-2%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}

            {security ? (
              <div className="row career-1">
                <h1>Security</h1>
                {cdata.slice(10, 12).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex ">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6286368c5f5cc306ac2a4672_Jobs%20and%20Career%20Opportunities%20at%20Discord-2%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}

            {trust ? (
              <div className="row career-1">
                <h1>Trust & Saftey</h1>
                {cdata.slice(12, 14).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex ">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62863c8db17711c5ebd36ac5_Jobs%20and%20Career%20Opportunities%20at%20Discord-11%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}

            {product ? (
              <div className="row career-1">
                <h1>Product Design</h1>
                {cdata.slice(14, 16).map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4  col-md-4 col-12" key={index}>
                        <div className="career-card">
                          <h3>{item.head}</h3>
                          <div className="d-flex ">
                            <p className="career-paragraph">
                              San Fransicio, CA or Remote (U.S)
                            </p>
                            <img
                              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6286368c5f5cc306ac2a4672_Jobs%20and%20Career%20Opportunities%20at%20Discord-2%201.svg"
                              className=""
                              alt="discord"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="career-back">
            <div className="row career-bck-row">
              <h1>Inclusion, Diversity and Purpose at Discord</h1>
              <div className="col-lg-6 col-12">
                <h2>Belonging from the Inside Out</h2>
                <p>
                  Our internal programs include but are not limited to
                  unconscious bias training, employee resource groups, inclusive
                  hiring practices, diversity sourcing strategies, and
                  partnerships with high-impact organizations that drive equity.
                  As we build our external strategy, we empower our employees to
                  be a force for good in the world and support causes they are
                  passionate about.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <h2>Our Employee Resource Groups</h2>
                <p>
                  Discord’s Employee Resource Groups (ERGs) are employee-led
                  organizations centered around belonging. Led by our Inclusion,
                  Diversity & Purpose team, Discord empowers our ERGs to create
                  an inclusive space where members of underrepresented groups
                  and allies can come together to celebrate our diverse
                  communities. Our ERG leads have 10% allocated work time to
                  help build belonging through promoting education and
                  awareness, offering learning opportunities, and driving
                  advocacy for their communities in and outside of Discord.
                </p>
              </div>
            </div>
            <div className="row">
              <Careerslide />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="career-bg1">
            <div className="career-row-4">
              <h1>Experience Life @ Discord</h1>
              <div className="row">
                {cnt.map((item, index) => {
                  return (
                    <>
                      <div className="col-lg-4 col-12" key={index}>
                        <div className="career-blue">
                          <img src={item.logo} className="" alt="logo" />
                          <h5>{item.hed}</h5>
                          <p>{item.cont}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="black-bg">
            <p className="first-black">
              If you're wanting to work with a motivated team on something that
              gives millions of users a space to find belonging, check out the
              four values of working at Discord&nbsp;&nbsp;
              <span className="career-link" onClick={() => navigate("/Blog")}>
                on our blog.
              </span>
              &nbsp; For all roles, we're hiring people to join us in our
              beautiful San Francisco office, and for select, indicated
              positions, we're currently open to having people join our team
              remotely in these states:
            </p>
            <p>
              Alabama - Alaska - Arizona - California - Colorado - Connecticut -
              District of Columbia - Florida - Georgia - Idaho - Illinois -
              Indiana - Iowa - Kansas - Kentucky - Louisiana - Maine - Maryland
              - Massachusetts - Michigan - Minnesota - Mississippi - Missouri -
              Montana -Nevada - New Hampshire - New Jersey - New Mexico - New
              York - North Carolina - Ohio - Oklahoma - Oregon - Pennsylvania -
              Rhode Island - South Carolina - Tennessee - Texas - Utah - Vermont
              - Virginia - Washington - Wisconsin
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="black-bg2">
            <Careersld2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
