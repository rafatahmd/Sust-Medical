import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const loginButtonStyle = {
  backgroundColor: "#91989D",
  color: "black",
  padding: "5px 45px",
  borderRadius: "8px",
  fontSize: "20px",
};

function Patient() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/users/login", {
        username,
        password,
      });
      console.log(res);
      if (res.data.auth) {
        navigate("/patient_dashboard");
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="patient patient_doctor_bg" id="patient">
        <div className="container">
          <div className="row min-vh-100 align-items-center text-center text-md-left">
            <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
              <img src={"/images/patient1.jpg"} width="100%" alt="patient" />
            </div>

            <div className="col-md-6 pl-md-5 content">
              <div className="center">
                <h1>Patient Login</h1>
                <form onSubmit={onLogin}>
                  <div className="txt_field">
                    <input
                      type="text"
                      required
                      onChange={(e) => setUserName(e.target.value)}
                    ></input>
                    <span></span>
                    <label>Username</label>
                  </div>
                  <div className="txt_field">
                    <input
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <span></span>
                    <label>Password</label>
                  </div>

                  <button type="submit">
                    <div style={loginButtonStyle}>Login</div>
                  </button>
                  <div className="signup_link">
                    Forgot Password?
                    <a href="#">Recover Password</a>
                    <br></br>
                    Not a member?{" "}
                    <Link to={`/registrationPatient`}>Register</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Patient;
