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
      Doctor_Duty_Start: time,
      Doctor_Duty_End: endtime,
    });
    console.log(res);
    Router("/alldoctor");
  };

  return (
    <div className="bg-secondary align-items-center text-center">
      <h1>ADD DOCTOR</h1>
      <div class="main-agileinfo">
        <div class="agileits-top">
          <form>
            <ul>
              <li>
                {" "}
                <input
                  class="text"
                  type="text"
                  name="DoctorID"
                  placeholder="Doctor ID"
                  required=""
                  onChange={(e) => setID(e.target.value)}
                ></input>
              </li>
              <li>
                <input
                  class="text email"
                  type="text"
                  name="DoctorName"
                  placeholder="Doctor Name"
                  onChange={(e) => setName(e.target.value)}
                  required=""
                ></input>
              </li>
              <li>
                <input
                  class="text"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                ></input>
              </li>
              <li>
                <input
                  class="text w3lpass"
                  type="text"
                  name="Contact"
                  placeholder="Contact Number"
                  onChange={(e) => setContact(e.target.value)}
                  required=""
                ></input>
              </li>
              <li>
                <input
                  class="text"
                  type="text"
                  name="Designation"
                  placeholder="Designation"
                  onChange={(e) => setDesignation(e.target.value)}
                  required=""
                ></input>
              </li>

              <li>
                <input
                  class="text"
                  type="text"
                  placeholder="Doctor_Duty_Start"
                  name="Doctor_Duty_Start"
                  onChange={(e) => setTime(e.target.value)}
                  required=""
                ></input>
              </li>

              <li>
                <input
                  class="text"
                  type="text"
                  placeholder="Doctor_Duty_End"
                  name="Doctor_Duty_End"
                  onChange={(e) => setEndtime(e.target.value)}
                  required=""
                ></input>
              </li>
            </ul>

            <button
              className="registerbtn"
              type="button"
              onClick={HandleSubmit}
            >
              ADD DOCTOR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adddoctor;
