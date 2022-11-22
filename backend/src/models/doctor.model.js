"use strict";
var dbConn = require("../../config/db.config");
var Doctor = function (doctor) {
  this.Doctor_ID = doctor.Doctor_ID;
  this.Doctor_Name = doctor.Doctor_Name;
  this.Doctor_Designation = doctor.Doctor_Designation;
  this.Doctor_Duty_Start = doctor.Doctor_Duty_Start;
  this.Doctor_Duty_End = doctor.Doctor_Duty_End;
  this.Doctor_Email = doctor.Doctor_Email;
  this.Doctor_Contact_Number = doctor.Doctor_Contact_Number;
  //this.Medicine_Available    = medicine.Medicine_Available;
  //this.created_at     = new Date();
  //this.updated_at     = new Date();
};

Doctor.findAll = function (result) {
  dbConn.query(
    "Select Doctor_Name,Doctor_Duty_Start,Doctor_Duty_End,Doctor_Email,Doctor_Contact_Number from tbl_doctor ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("medicine : ", res);
        result(null, res);
      }
    }
  );
};

Doctor.create = function (newEmp, result) {
  dbConn.query("INSERT INTO tbl_doctor set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
module.exports = Doctor;
