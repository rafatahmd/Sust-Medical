import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Allappointment() {
  const [patient, setPatient] = useState(null);
  useEffect(() => {
    const getpatient = async () => {
      const ans = await axios.get("http://localhost:5000/api/v1/appointment");
      console.log(ans);
      setPatient(ans.data);
    };
    getpatient();
  }, []);

  return (
    <div>
      <div className="bg-primary">
        <h1 className="bg-secondary align-items-center text-center">
          <b>All Appointment List</b>
        </h1>
        <nav className="navigation">
          <ul className="bg-secondary">
            <li>
              <h4>
                <b>Appointment Id</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Patient Reg No</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Patient Name</b>
              </h4>
            </li>
          </ul>
        </nav>
      </div>

      {patient
        ? patient.map((item) => (
            <div>
              <div>
                <nav className="navigation">
                  <ul>
                    <li>
                      <h4>{item.Appointment_ID}</h4>
                    </li>
                    <li>
                      <h4>{item.Patient_Reg_No}</h4>
                    </li>
                    <li>
                      <h4>{item.Patient_Name}</h4>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            // <p className="">Patient Name:{item.Patient_Name}</p>
            // <p className="">Patient Reg No:{item.Patient_Reg_No} </p>
            // <p className="">Patient Session:{item.Patient_session} </p>
            // <p className="">Patient Blood Group:{item.Patient_Blood}</p>
            // <p className="">Patient Age :{item.Patient_Age}</p>
            // <p className="">Patient Sex:{item.Patient_Sex}</p>
          ))
        : null}
    </div>
  );
}
