// import React, { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

// export default function Alldoctor() {
//   const style = {
//     color: "white",
//     padding: 2,
//   };

//   const [doctor, setdoctor] = useState(null);
//   useEffect(() => {
//     const getdoctor = async () => {
//       const ans = await axios.get("http://localhost:5000/api/v1/doctor");
//       console.log(ans);
//       setdoctor(ans.data);
//     };
//     getdoctor();
//   }, []);

//   return (
//     <div>
//       <h1 className="showHeader">All Doctor</h1>

//       <div>
//         {doctor
//           ? doctor.map((item) => (
//               <div className="show">
//                 <>
//                   <p className="bg-secondary">
//                     Doctor name :{item.Doctor_Name}
//                   </p>
//                   <p className="">Doctor email:{item.Doctor_Email} </p>
//                   <p className={style}>
//                     Doctor contact Number:{item.Doctor_Contact_Number}
//                   </p>
//                   <p className="">
//                     Doctor Duty Satart:{item.Doctor_Duty_Start}
//                   </p>
//                 </>
//               </div>
//             ))
//           : null}
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Alldoctor() {
  const style = {
    color: "#C3874F",
    padding: 2,
    textAllign: "center",
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
    <div className="">
      <div className="bg-primary">
        <h1 className="bg-secondary align-items-center text-center">
          <b>All Doctor List</b>
        </h1>
        <nav className="navigation">
          <ul className="bg-secondary">
            <li>
              <h4>
                <b>Doctor name</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Doctor Email</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Doctor Contact</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Doctor Duty Start</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Doctor Duty End</b>
              </h4>
            </li>
          </ul>
        </nav>
      </div>

      {doctor
        ? doctor.map((item) => (
            <div>
              <div>
                <nav className="navigation">
                  <ul>
                    <li>
                      <h4>{item.Doctor_Name}</h4>
                    </li>
                    <li>
                      <h4>{item.Doctor_Email}</h4>
                    </li>
                    <li>
                      <h4>{item.Doctor_Contact_Number}</h4>
                    </li>
                    <li>
                      <h4>{item.Doctor_Duty_Start}</h4>
                    </li>
                    <li>
                      <h4>{item.Doctor_Duty_End}</h4>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
