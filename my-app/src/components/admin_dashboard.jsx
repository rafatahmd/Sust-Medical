import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardStyle = {
  color: "#CC3333",
};

function Admin_dashboard() {
  return (
    <div class="cards-list">
      <div>
        <div class="card 1">
          <div class="card_image">
            <img src="images/patient.jpeg" />{" "}
          </div>
          <div class="card_title title-white">
            <Link to={"/allpatien"}>view patient</Link>
          </div>
        </div>
      </div>

      <div>
        <div class="card 2">
          <div class="card_image">
            <img src="images/medicine.png" />
          </div>
          <div class="card_title title-white">
            <Link to={"/allmedicine"}>show madicine</Link>
          </div>
        </div>
      </div>

      <div>
        <div class="card 3">
          <div class="card_image">
            <img src="images/medical-appointment.png" />
          </div>
          <div class="card_title">
            <Link to={"/alldoctor"}>show Doctor</Link>
          </div>
        </div>
      </div>

      <div>
        <div class="card 3">
          <div class="card_image">
            <img src="images/medical-appointment.png" />
          </div>
          <div class="card_title">
            <Link to={"/adddoctor"}>Add Doctor</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_dashboard;
