import React from "react";

function Patient_registration() {
  return (
    <div class="main-w3layouts wrapper">
      <h1>Patient Registration</h1>
      <div class="main-agileinfo">
        <div class="agileits-top">
          <form action="#" method="post">
            <input
              class="text"
              type="text"
              name="PatientID"
              placeholder="patient ID"
              required=""
            ></input>
            <input
              class="text email"
              type="text"
              name="DoctorName"
              placeholder="Patient Name"
              required=""
            ></input>

            <label for="Blood">
              <span style="color: white;">Blood Group :</span>{" "}
            </label>
            <select name="Blood" id="">
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>

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

export default Patient_registration;
