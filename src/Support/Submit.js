import React, { useState } from "react";
import "./css/Submit.css";
import Nav2 from "../component/Nav2.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Supportfooter from "./Supportfooter.js";

const HelpSupportForm = () => (
  <div className="submit-help">
    <form className="help-frm">
      <label>Your Email Address</label>

      <br />
      <input type="email" className="submit-mail" />
      <br />
      <label>Type of Question? </label>
      <br />
      <select className="submit-select">
        <option className="submit-option" value="-">
          -
        </option>
        <option value="HelpSupport">Phone Verification</option>
        <option value="HackedAccount">Technical Support</option>
        <option value="Appeals">Username Inquiries</option>
        <option value="Billing">Account Deletion Request</option>
        <option value="BugReporting">Gifting Issue</option>
      </select>
      <br />
      <label>Subject</label>
      <br />
      <input type="text" className="submit-mail" />
      <br />
      <label>Description</label>
      <br />
      <textarea className="submit-text"></textarea>
      <br />
      <label>Attachments (Optional)</label>
      <div className="file-upload-container">
        <input type="file" id="file" className="file-input" />
        <label htmlFor="file" className="file-label">
          <span>Add file</span> or drop files here
        </label>
      </div>
      <button type="submit" className="dark-submit">
        Submit
      </button>
    </form>
  </div>
);

const HackedAccountForm = () => (
  <div className="submit-help">
    <form className="help-frm">
      <label>Your Email Address</label>
      <br />
      <input type="email" className="submit-mail" />
      <br />
      <label>
        Username#0001 (Full username and tag number) associated with
        <br /> the Discord account
      </label>
      <br />
      <input type="email" className="submit-mail" />
      <br />
      <label>Email associated with the account before it was compromised</label>
      <br />
      <input type="email" className="submit-mail" />
      <br />
      <p>
        <span>NOTE:</span> Please submit your ticket from the email associated
        with the account before it was compromised. We are unable to assist you
        if you do not write in from the correct email address.
      </p>
      <label>Suspicion of how you believe the account was compromised </label>
      <br />
      <select className="submit-select">
        <option className="submit-option" value="-">
          -
        </option>
        <option value="HelpSupport">xyzbgsdryhffhdbhh</option>
        <option value="HackedAccount">xyzbgsdryhffhdbhh</option>
        <option value="Appeals">xyzbgsdryhffhdbhh</option>
        <option value="Billing">xyzbgsdryhffhdbhh</option>
        <option value="BugReporting">xyzbgsdryhffhdbhh</option>
      </select>
      <br />
      <label>Subject</label>
      <br />
      <input type="text" className="submit-mail" />
      <br />
      <label>Description</label>
      <br />
      <textarea className="submit-text"></textarea>
      <br />
      <label>Attachments (Optional)</label>
      <div className="file-upload-container">
        <input type="file" id="file" className="file-input" />
        <label htmlFor="file" className="file-label">
          <span>Add file</span> or drop files here
        </label>
      </div>
      <button type="submit" className="dark-submit">
        Submit
      </button>
    </form>
  </div>
);

const AppealsForm = () => (
  <div className="submit-help">
    <form className="help-frm">
      <label>Your Email Address</label>
      <br />
      <input type="email" className="submit-mail" />
      <br />
      <label>Type of Question? </label>
      <br />
      <select className="submit-select">
        <option className="submit-option" value="-">
          -
        </option>
        <option value="HelpSupport">Phone Verification</option>
        <option value="HackedAccount">Technical Support</option>
        <option value="Appeals">Username Inquiries</option>
        <option value="Billing">Account Deletion Request</option>
        <option value="BugReporting">Gifting Issue</option>
      </select>
      <br />
      <label>Subject</label>
      <br />
      <input type="text" className="submit-mail" />
      <br />
      <label>Description</label>
      <br />
      <textarea className="submit-text"></textarea>
      <br />
      <label>Attachments (Optional)</label>
      <div className="file-upload-container">
        <input type="file" id="file" className="file-input" />
        <label htmlFor="file" className="file-label">
          <span>Add file</span> or drop files here
        </label>
      </div>
      <button type="submit" className="dark-submit">
        Submit
      </button>
    </form>
  </div>
);

const BillingForm = () => (
  <div className="submit-help">
    <form className="help-frm">
      <label>Your Email Address</label>
      <br />
      <input type="email" className="submit-mail" />
      <br />
      <label>Type of Billing Issue? </label>
      <br />
      <select className="submit-select">
        <option className="submit-option" value="-">
          -
        </option>
        <option value="HelpSupport">
          I want a refund for a subscription purchase
        </option>
        <option value="HackedAccount">
          I want a refund for a subscription purchase
        </option>
        <option value="Appeals">
          I want a refund for a subscription purchase
        </option>
        <option value="Billing">
          I want a refund for a subscription purchase
        </option>
        <option value="BugReporting">
          I want a refund for a subscription purchase
        </option>
      </select>
      <br />

      <label>Description</label>
      <br />
      <textarea className="submit-text"></textarea>
      <br />
      <label>Attachments (Optional)</label>
      <div className="file-upload-container">
        <input type="file" id="file" className="file-input" />
        <label htmlFor="file" className="file-label">
          <span>Add file</span> or drop files here
        </label>
      </div>
      <button type="submit" className="dark-submit">
        Submit
      </button>
    </form>
  </div>
);

const BugReportingForm = () => (
  <div className="submit-help">
    <form className="help-frm">
      <label>Your Email Address</label>
      <br />
      <input type="email" className="submit-mail" />
      <br />
      <label>What Client? </label>
      <br />
      <select className="submit-select">
        <option className="submit-option" value="-">
          -
        </option>
        <option value="HelpSupport">android</option>
        <option value="HackedAccount">IOS</option>
        <option value="Appeals">Windows</option>
        <option value="Billing">Android</option>
        <option value="BugReporting">Linux</option>
      </select>
      <br />
      <label>Impact </label>
      <br />
      <select className="submit-select">
        <option className="submit-option" value="-">
          -
        </option>
        <option value="HelpSupport">Voice Chat</option>
        <option value="HackedAccount">Video</option>
        <option value="Appeals">Screen Share</option>
        <option value="Billing">Messages/Text</option>
        <option value="BugReporting">Other</option>
      </select>
      <br />
      <label>Actual Result</label>
      <br />
      <textarea className="submit-text"></textarea>
      <br />
      <p>What actually happens if you follow the steps.</p>
      <label>Description</label>
      <br />
      <textarea className="submit-text"></textarea>
      <br />
      <label>Attachments (Optional)</label>
      <div className="file-upload-container">
        <input type="file" id="file" className="file-input" />
        <label htmlFor="file" className="file-label">
          <span>Add file</span> or drop files here
        </label>
      </div>
      <button type="submit" className="dark-submit">
        Submit
      </button>
    </form>
  </div>
);

function Submit() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("-");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="main-submit">
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
                &nbsp; Submit a request
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
        <hr className="sb-hr" />

        <div className="row submit-first-row">
          <div className="col-lg-2 col-12"></div>
          <div className="col-lg-6 col-12">
            <h2 className="submit-hd">Submit a request</h2>
            <p className="submit-p">What can we help you with?</p>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="submit-select"
            >
              <option className="submit-option" value="-">
                -
              </option>
              <option value="HelpSupport">Help & Support</option>
              <option value="HackedAccount">Hacked Account</option>
              <option value="Appeals">Appeals & Age Update Requests</option>
              <option value="Billing">Billing</option>
              <option value="BugReporting">Bug Reporting</option>
            </select>

            {selectedOption === "HelpSupport" && <HelpSupportForm />}
            {selectedOption === "HackedAccount" && <HackedAccountForm />}
            {selectedOption === "Appeals" && <AppealsForm />}
            {selectedOption === "Billing" && <BillingForm />}
            {selectedOption === "BugReporting" && <BugReportingForm />}
          </div>
        </div>
      </div>
      <Supportfooter />
    </>
  );
}

export default Submit;
