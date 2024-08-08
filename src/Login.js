import React, { useState } from "react";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Handlesubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error(" Email is Must", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (password.length === 0) {
      toast.error("Password is Must", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setEmail("");
    setPassword("");

    const result = await fetch("https://discordnode.onrender.com/login", {
      method: "post",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await result.json();
    console.log(res);

    localStorage.setItem("user", JSON.stringify(res));
    navigate("/");


  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="main-login">
        <div className="bg-login">
          <div className="log-wrap">
            <div className="login-1">
              <form className="lg-frm" onSubmit={Handlesubmit}>
                <h2>Welcome Back</h2>
                <p>We're so excited to see you again!</p>
                <label>
                  EMAIL&nbsp;
                  <span
                    style={{
                      color: "brown",
                      fontSize: "18px",
                      position: "relative",
                      top: "5px",
                    }}
                  >
                    *
                  </span>
                </label>
                <br />
                <input
                  type="email"
                  className="frm-1"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <br />
                <label>
                  PASSWORD&nbsp;
                  <span
                    style={{
                      color: "brown",
                      fontSize: "18px",
                      position: "relative",
                      top: "5px",
                    }}
                  >
                    *
                  </span>
                </label>
                <br />
                <input
                  type="password"
                  className="frm-1"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="forgot">Forgot your Password?</div>
                <button type="submit">Log In</button>
                <div className="need">
                  Need an Account?{" "}
                  <span
                    className="forgot"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </span>
                </div>
              </form>
              <div className="qrcode">
                <div className="bg-qr">
                  <img src="qr.png" alt="...." className="" />
                </div>
                <h5>Log in with QR Code</h5>
                <p>
                  Scan with The <span>Discord Mobail App </span> to
                  <br /> log in instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
