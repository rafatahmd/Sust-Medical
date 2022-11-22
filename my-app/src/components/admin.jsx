import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const loginButtonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "12px 60px",
    borderRadius: "16px",
    fontSize: "16px",
  };

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
        navigate("/admin_dashboard");
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="Doctor patient_doctor_bg" id="Admin">
        <div className="container">
          <div className="row min-vh-100 align-items-center text-center text-md-left">
            <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
              <img src={"images/doctor.svg"} width="100%" alt="doctor" />
            </div>

            <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
              <div class="center">
                <h1>Admin Login</h1>
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
                    Not a member? <a href="admin_registration.html">Register</a>
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

export default Admin;
