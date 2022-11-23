import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Alldoctor() {
  const style = {
    color: "white",
    padding: 2,
  };

  const [doctor, setdoctor] = useState(null);
  useEffect(() => {
    const getdoctor = async () => {
      const ans = await axios.get("http://localhost:5000/api/v1/doctor");
      console.log(ans);
      setdoctor(ans.data);
    };
    getdoctor();
  }, []);

  return (
    <div>
      <h1 className="showHeader">All Doctor</h1>

      <div>
        {doctor
          ? doctor.map((item) => (
              <div className="show">
                <>
                  <p className="bg-secondary">
                    Doctor name :{item.Doctor_Name}
                  </p>
                  <p className="">Doctor email:{item.Doctor_Email} </p>
                  <p className={style}>
                    Doctor contact Number:{item.Doctor_Contact_Number}
                  </p>
                  <p className="">
                    Doctor Duty Satart:{item.Doctor_Duty_Start}
                  </p>
                </>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
