import React from "react";

function Doctor_registration() {
  return (
    <div class="main-w3layouts wrapper">
      <h1>Doctor Registration</h1>
      <div class="main-agileinfo">
        <div class="agileits-top">
          <form action="#" method="post">
            <input
              class="text"
              type="text"
              name="DoctorID"
              placeholder="Doctor ID"
              required=""
            ></input>
            <input
              class="text email"
              type="text"
              name="DoctorName"
              placeholder="Doctor Name"
              required=""
            ></input>
            <input
              class="text"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            ></input>
            <input
              class="text w3lpass"
              type="text"
              name="Contact"
              placeholder="Contact Number"
              required=""
            ></input>
            <input
              class="text"
              type="text"
              name="Designation"
              placeholder="Designation"
              required=""
            ></input>
            <input
              class="text w3lpass"
              type="Password"
              name="password"
              placeholder="Enter your Password"
              required=""
            ></input>
            <input
              class="text"
              type="password"
              name="password"
              placeholder="Confirm Password"
              required=""
            ></input>

            <input type="submit" value="Registerd"></input>
          </form>
        </div>
      </div>

      <ul class="colorlib-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Doctor_registration;
