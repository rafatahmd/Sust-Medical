import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Allpatient() {
  const [patient, setPatient] = useState(null);
  useEffect(() => {
    const getpatient = async () => {
      const ans = await axios.get("http://localhost:5000/api/v1/patient");
      console.log(ans);
      setPatient(ans.data);
    };
    getpatient();
  }, []);

  return (
    <div>
      <b>
        <h1 className="bg-secondary">All patient</h1>
      </b>

      <div>
        {patient
          ? patient.map((item) => (
              <>
                <p className="">Patient Name:{item.Patient_Name}</p>
                <p className="">Patient Reg No:{item.Patient_Reg_No} </p>
                <p className="">Patient Session:{item.Patient_session} </p>
                <p className="">Patient Blood Group:{item.Patient_Blood}</p>
                <p className="">Patient Age :{item.Patient_Age}</p>
                <p className="">Patient Sex:{item.Patient_Sex}</p>
              </>
            ))
          : null}
      </div>
    </div>
  );
}
