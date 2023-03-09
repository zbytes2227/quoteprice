import React, { useState,useEffect } from "react";
import "../styles.css";

function Totalbill(props) {
  const [planCost, setplanCost] = useState(100);

  useEffect(() => {
    if (props.planName === "BASIC") {
      setplanCost(500);
    } else if (props.planName === "PREMIUM") {
      setplanCost(1000);
    } else if (props.planName === "ULTIMATE") {
      setplanCost(1700);
    }
  }, [props.planName]);

  let total = props.includedItems.reduce((acc, item) => acc + item.price, 0);
  total = total + props.PageCost + planCost; 

  return (
    <div className="text-left border rounded billBox">
      <h2 className="text-center mt-3">Total Cost 💰</h2>
      <table className="table table-light mt-4">
        <thead>
          <tr>
            <th>Features</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {props.Pages === "1"
                ? "Cost of 1 Page"
                : "Cost of " + props.Pages + " Pages"}
            </td>
            <td>₹{props.PageCost}</td>
          </tr>
          {props.includedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
            </tr>
          ))}
          <tr className="table">
            <td className="font-weight-bold">PLAN - {props.planName}</td>
            <td>₹{planCost}</td>
          </tr>

          <tr className="table-secondary ">
            <th className="font-weight-bold">Total Amount</th>
            <th>₹{total}</th>
          </tr>

          <tr className="table">
            <td className="font-weight-bold">10% Discount 🎉</td>
            <td>−₹{Math.round((1 / 10) * total, -1)}</td>
          </tr>

          <tr className="table-dark ">
            <th className="font-weight-bold">Final Amount</th>
            <th>₹{total - Math.round((1 / 10) * total, -1)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Totalbill;
