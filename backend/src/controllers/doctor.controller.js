"use strict";
const Doctor = require("../models/doctor.model");
const dbConn = require("../../config/db.config");
exports.findAll = function (req, res) {
  Doctor.findAll(function (err, doctor) {
    console.log("doctor");
    if (err) res.send(err);
    console.log("res", doctor);
    res.send(doctor);
  });
};

exports.create = function (req, res) {
  const id = req.body.Doctor_ID;
  const name = req.body.Doctor_Name;
  const designation = req.body.Doctor_Designation;
  const time = req.body.Doctor_Duty_Start;
  const endtime = req.body.Doctor_Duty_End;
  const email = req.body.Doctor_Email;
  const contact = req.body.Doctor_Contact_Number;
  const new_doctor = new Doctor({
    Doctor_ID: id,
    Doctor_Name: name,
    Doctor_Designation: designation,
    Doctor_Duty_Start: time,
    Doctor_Duty_End: endtime,
    Doctor_Email: email,
    Doctor_Contact_Number: contact,
  });

  dbConn.query(
    "INSERT INTO tbl_doctor (Doctor_ID,Doctor_Name,Doctor_Designation,Doctor_Duty_Start, Doctor_Duty_End,Doctor_Email,Doctor_Contact_Number)values(?,?,?,?,?,?)",
    [id, name, designation, time, endtime, email, contact],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );

  console.log(new_doctor);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Doctor.create(new_doctor, function (err, doctor) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Doctor added successfully!",
        data: doctor,
      });
    });
  }
};
