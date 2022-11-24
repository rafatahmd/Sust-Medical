"use strict";
var dbConn = require("../../config/db.config");
var Appointment = function (appointment) {
  this.Appointment_ID = appointment.Appointment_ID;
  this.Patient_Reg_No = appointment.Patient_Reg_No;
  this.Appointment_Date = appointment.Appointment_Date;

  //this.created_at     = new Date();
  //this.updated_at     = new Date();
};

Appointment.findAll = function (result) {
  dbConn.query(
    "Select tbl_appointment.Appointment_ID,tbl_appointment.Patient_Reg_No,tbl_medical_card.Patient_Name from tbl_appointment inner join tbl_medical_card on tbl_appointment.Patient_Reg_No = tbl_medical_card.Patient_Reg_No ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("result : ", res);
        result(null, res);
      }
    }
  );
};

Appointment.create = function (newEmp, result) {
  dbConn.query(
    "INSERT INTO tbl_appointment set ?",
    newEmp,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

module.exports = Appointment;
