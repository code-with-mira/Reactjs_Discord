import React, { useState } from "react";
import "../css/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const [languages, setLanguages] = useState("");
  const logout = () => {
    localStorage.clear();
   window.location.reload();
  };


  const languag = [
    {
      value: "01",
      name: "Espanol",
      flag: "united-states-of-america.png",
    },

    { value: "02", name: "Gujarati" },
    { value: "03", name: "Hindi" },
    { value: "04", name: "Danshk" },
    { value: "05", name: "English (UK)" },
    { value: "06", name: "Italiano" },
    { value: "07", name: "Magyar" },
    { value: "08", name: "Polski" },
    { value: "09", name: "Suomi" },
    { value: "10", name: "Francis" },
    { value: "11", name: "Hindi" },
  ];
  const handleChange = (event) => {
    setLanguages(event.target.value);
  };
  return (
    <>
      <div className="main-footer">
        <div className="bg-footer">
          <div className="row foot-row">
            <div className="col-lg-4 col-md-4 col-12">
              <select
                value={languages}
                onChange={handleChange}
                className="leg-1"
              >
                <option value="" className="foot-option">
                  English
                </option>

                {languag.map((item) => (
                  <option
                    className="foot-option"
                    key={item.value}
                    value={item.value}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="foot-1">
                <Link
                  className="foot-icon"
                  to="https://www.instagram.com/discord/"
                >
                  <FaInstagram />
                </Link>
                <Link className="foot-icon" to="https://x.com/discord ">
                  <FaXTwitter className="foot-icon" />
                </Link>
                <Link
                  className="foot-icon"
                  to="https://www.facebook.com/discord/"
                >
                  <FaFacebook className="foot-icon" />
                </Link>
                <Link
                  className="foot-icon"
                  to="https://www.youtube.com/discord"
                >
                  <FaYoutube className="foot-icon" />
                </Link>
                <Link
                  className="foot-icon"
                  to="https://www.tiktok.com/@discord"
                >
                  <FaTiktok className="foot-icon" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4  col-12">
              <div className="foot-2">
                <div>
                  <p>Product</p>
                  <div
                    className="foot-link"
                    onClick={() => navigate("/download")}
                  >
                    Download
                  </div>
                  <div className="foot-link" onClick={() => navigate("/Nitro")}>
                    Nitro
                  </div>
                  <div
                    className="foot-link"
                    onClick={() => navigate("/Discover")}
                  >
                    Discover
                  </div>
                  <div className="foot-link" onClick={() => navigate("/")}>
                    Discord
                  </div>
                </div>
                <div>
                  <p>Company</p>
                  <div className="foot-link">About</div>
                  <div
                    className="foot-link"
                    onClick={() => navigate("/Careers")}
                  >
                    Jobs
                  </div>
                  <div className="foot-link" onClick={() => navigate("/Blog")}>
                    Blog
                  </div>
                  <div className="foot-link">Quests</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="foot-2">
                <div>
                  <p>Resources</p>
                  <div className="foot-link">Collage</div>
                  <div
                    className="foot-link"
                    onClick={() => navigate("/Support")}
                  >
                    Support
                  </div>
                  <div
                    className="foot-link"
                    onClick={() => navigate("/Saftey")}
                  >
                    Saftey
                  </div>
                  <div className="foot-link" onClick={() => navigate("/Blog")}>
                    Blog
                  </div>
                  <div
                    className="foot-link"
                    onClick={() => navigate("/Support/feedback")}
                  >
                    Feedback
                  </div>
                  {/* <div className="foot-link">StreamKit</div>
                  <div className="foot-link">Creators</div>
                  <div className="foot-link">Community</div>
                  <div className="foot-link">Devlopers</div> */}
                  <div className="foot-link">Gaming</div>
                </div>
                <div>
                  <p>Policies</p>
                  <div className="foot-link">Terms</div>
                  <div className="foot-link">Privacy</div>
                  <div className="foot-link">Cookie Settings</div>
                  <div className="foot-link">Guidelines</div>
                  {/* <div className="foot-link">Acknowledgement</div>
                  <div className="foot-link">Licenses</div>
                  <div className="foot-link">Company Information</div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row foot-row-1">
            <div className="col-1"></div>
            <div className="col-lg-10 col-12">
              <div className="foot-3">
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                  alt="discord"
                  className="foot-pic"
                  onClick={() => navigate("/")}
                />
                <button onClick={logout}>Logout</button>
              </div>
            </div>

            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
