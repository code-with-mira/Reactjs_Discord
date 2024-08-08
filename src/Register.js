import React, { useState } from "react";
import "./css/Register.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !name || !password) {
      toast.error(" Please Fill All Filed", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      const result = await fetch("https://discordnode.onrender.com/register", {
        method: "post",
        body: JSON.stringify({name:name, email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await result.json();
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));

      navigate("/");
    }

    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="main-ragister">
        <div className="ragister-bg">
          <div className="reg-wrap">
            <div className="reg-1">
              <h4>Create an Account</h4>
              <form onSubmit={handleSubmit}>
                <label>
                  NAME&nbsp;
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
                <input
                  type="text"
                  className="reg-frm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <br />

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
                  type="text"
                  className="reg-frm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  className="reg-frm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span
                    className={`checkmark ${isChecked ? "checked" : ""}`}
                  ></span>
                  <p>
                    (Optional) Its Okey to send me mail Discord updateds, tips,
                    and <br />
                    special offers. You can opt out at any time.
                  </p>
                </label>
                <button type="submit">Continue</button>
                <p className="last-reg">
                  By registering, you agree to Discords{" "}
                  <span>Terms and Service</span> and <span>Privacy Policy</span>
                </p>
                <div className="already" onClick={() => navigate("/Login")}>
                  Already have an account ?
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
