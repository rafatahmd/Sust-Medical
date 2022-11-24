import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Allmedicine() {
  const pstyle = {
    backgroundColor: "blue",
    color: "blue ",
    padding: "12px 60px",
    borderRadius: "16px",
    fontSize: "16px",
  };

  const [medicine, setmedicine] = useState(null);
  useEffect(() => {
    const getmedicine = async () => {
      const ans = await axios.get("http://localhost:5000/api/v1/medicine");
      console.log(ans);
      setmedicine(ans.data);
    };
    getmedicine();
  }, []);

  return (
    <div>
      <div className="bg-primary">
        <h1 className="bg-secondary align-items-center text-center">
          <b>All Medicine List</b>
        </h1>
        <nav className="navigation">
          <ul className="bg-secondary">
            <li>
              <h4>
                <b>Medicine_Name</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Medicine_Quantity</b>
              </h4>
            </li>
            <li>
              <h4>
                <b>Medicine_Expire_Date</b>
              </h4>
            </li>
          </ul>
        </nav>
      </div>

      {medicine
        ? medicine.map((item) => (
            <div>
              <div>
                <nav className="navigation">
                  <ul>
                    <li>
                      <h4>{item.Medicine_Name}</h4>
                    </li>
                    <li>
                      <h4>{item.Medicine_Quantity}</h4>
                    </li>
                    <li>
                      <h4>{item.Medicine_Expire_Date}</h4>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            // <div className={pstyle}>
            //   <div className="">
            //     <p>Medicine Name :{item.Medicine_Name}</p>
            //     <p className="">
            //       Medicine Quantity:{item.Medicine_Quantity}{" "}
            //     </p>
            //     <p className="">
            //       Medicine Expire Date:{item.Medicine_Expire_Date}
            //     </p>
            //   </div>
            // </div>
          ))
        : null}
    </div>
  );
}
