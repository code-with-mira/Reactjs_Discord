import React from "react";
import "./css/Signup.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-signup">
        <div className="support-signup">
          <form className="sign-2">
            <p>Sign Up to Discord</p>
            <p className="second-signup">
              Please fill out this form, and we'll send you a welcome email so
              you can verify your email address and sign in.
            </p>
            <label> Your Full Name *</label>
            <br />
            <input type=" text" className="signup-input" />
            <br />
            <label>Email *</label>
            <br />
            <input type="email" className="signup-input" />
            <button>Sign Up</button>
            <p
              className="last-signup"
              onClick={() => navigate("/Support/signin")}
            >
              Cancel
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
