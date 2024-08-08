import React, { useState } from "react";
import "./css/Signin.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
function Signin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="main-signin">
        <div className="support-sign">
          <form className="sign-1">
            <p>Sign in to Discord</p>
            <label>Email</label>
            <br />
            <input type="email" className="sign-fild" id="signinput" />
            <br />
            <label>Password</label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              className="sign-fild"
              id="signinput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="show-pass-btn"
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
            <p className="sign-forgot">Forgot Password?</p>
            <button>Sign In</button>
            <p className="last-signin">
              Emailed us for support? <span>Get a password</span>
            </p>
            <p className="last-signin-1">
              New to Discord?{" "}
              <span onClick={() => navigate("/Support/signup")}>Sign up</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
