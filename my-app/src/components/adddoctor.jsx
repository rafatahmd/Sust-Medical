import React from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Adddoctor() {
  const [id, setID] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [endtime, setEndtime] = useState(null);
  const [time, setTime] = useState(null);
  const Router = useNavigate();

  const HandleSubmit = async () => {
    const url = "http://localhost:5000/api/v1/doctor/add";
    const res = await axios.post(url, {
      Doctor_ID: id,
      Doctor_Name: name,
      Doctor_Email: email,
      Doctor_Contact_Number: contact,
      Doctor_Designation: designation,
      Doctor_Start_Time: time,
      Doctor_End_Time: endtime,
    });
    console.log(res);
    Router("/alldoctor");
  };

  return (
    <div class="main-w3layouts wrapper">
      <h1>Add Dotor</h1>
      <div class="main-agileinfo">
        <div class="agileits-top">
          <form>
            <input
              class="text"
              type="text"
              name="DoctorID"
              placeholder="Doctor ID"
              required=""
              onChange={(e) => setID(e.target.value)}
            ></input>
            <input
              class="text email"
              type="text"
              name="DoctorName"
              placeholder="Doctor Name"
              onChange={(e) => setName(e.target.value)}
              required=""
            ></input>
            <input
              class="text"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required=""
            ></input>
            <input
              class="text w3lpass"
              type="text"
              name="Contact"
              placeholder="Contact Number"
              onChange={(e) => setContact(e.target.value)}
              required=""
            ></input>
            <input
              class="text"
              type="text"
              name="Designation"
              placeholder="Designation"
              onChange={(e) => setDesignation(e.target.value)}
              required=""
            ></input>

            <input
              class="text"
              type="text"
              placeholder="Duty Start Time *"
              name="date"
              onfocus="(this.type = 'time')"
              onChange={(e) => setTime(e.target.value)}
              required
              autofocus
            ></input>

            <input
              class="text"
              type="text"
              placeholder="Duty End Time *"
              name="date"
              onfocus="(this.type = 'time')"
              required
              onChange={(e) => setEndtime(e.target.value)}
              autofocus
            ></input>

            <button type="button" onClick={HandleSubmit}>
              ADD
            </button>
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

export default Adddoctor;
