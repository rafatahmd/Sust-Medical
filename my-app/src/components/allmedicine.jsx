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
      <h1 className="bg-secondary">All Medicine</h1>

      <div className="">
        {medicine
          ? medicine.map((item) => (
              <div className={pstyle}>
                <div className="">
                  <p>Medicine Name :{item.Medicine_Name}</p>
                  <p className="">
                    Medicine Quantity:{item.Medicine_Quantity}{" "}
                  </p>
                  <p className="">
                    Medicine Expire Date:{item.Medicine_Expire_Date}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
