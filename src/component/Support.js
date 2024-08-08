import React, { useState } from "react";
import Nav2 from "../component/Nav2";
import "../css/Support.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import supportdata from "../data/Supportdata";
import Supportfooter from "../Support/Supportfooter";
import { FaMinus } from "react-icons/fa6";
import { RiQuestionLine } from "react-icons/ri";
function Support() {
  const [inputValue, setInputValue] = useState();
  const [sdata, setSdata] = useState(supportdata);
  const [help, setHelp] = useState(false);
  const [bt, setBt] = useState(true);
  const Change = (e) => {
    setInputValue(e.target.value);
  };
  const clear = () => {
    setInputValue("");
  };

  return (
    <>
      <div className="main-support">
        <Nav2 />
        <div className="bg-support">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-lg-2 col-12">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4df2dc8d7a9a081ebd_8a8375ab7908384e1fd6efe408284203.svg"
                alt="...."
                className="sup-pic-1"
              />
            </div>
            <div className="col-lg-6 col-12">
              <div className="sup-1">
                <h1>Help Center</h1>
                <input
                  type="search"
                  className="sup-srch"
                  placeholder="Search"
                  onChange={Change}
                  value={inputValue}
                />
                {inputValue && (
                  <button className="clr-btn" onClick={clear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                )}
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4db9ca0a124b73d4b7_c40c84ca18d84633a9d86b4046a91437.svg"
                alt="...."
                className="sup-pic"
              />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        <div className="row s-f-row">
          <h3 className="s-head">Need help? We've got your back.</h3>
          <p className="s-para">
            From account settings to permissions, find help for everything
            Discord <br />
            If you're new to Discord and looking for tips, check out our&nbsp;
            <span>Beginner's Guide</span>
          </p>
          <div className="col-1"></div>
        </div>
        <div className="row help-row">
          <div className="help-btn-box">
            {bt ? (
              <button
                onClick={() => {
                  setBt(false);
                  setHelp(true);
                }}
              >
                <RiQuestionLine style={{ fontSize: "20px" }} /> Help
              </button>
            ) : null}
          </div>
          {help ? (
            <div className="main-help-bx">
              <div className="help-box">
                <button className="help-box-btn-1">
                  Help
                  <span
                    onClick={() => {
                      setHelp(false);
                      setBt(true);
                    }}
                  >
                    <FaMinus />
                  </span>
                </button>
                <input
                  type="text"
                  placeholder="How can we help ?"
                  className="help-input"
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="row sup-row">
          {sdata.slice(0, 8).map((item, index) => {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="sup-data" key={index}>
                    <div className="sdata-pic">{item.pic}</div>
                    <div className="sdata-head">{item.head}</div>
                    <div className="sdata-content">{item.content}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="row sup-row-2">
          {sdata.slice(10, 12).map((item, index) => {
            return (
              <>
                <div className="col-lg-6  col-md-6 col-12">
                  <div className="sup-data" key={index}>
                    <div className="sdata-pic">{item.pic}</div>
                    <div className="sdata-head">{item.head}</div>
                    <div className="sdata-content">{item.content}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Supportfooter />
    </>
  );
}

export default Support;
