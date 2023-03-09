import React from "react";
function Itemcheck(props) {
  return (
    <div className=" my-3">
      {/* <input
        type="checkbox"
        checked={props.itemValue}
        onChange={props.onCheckboxChange}
        className="form-check-input"
        id="my-checkbox"
      />
      <label className="form-check-label" htmlFor="my-checkbox">
        {props.itemName}
      </label> */}

      <label className="check-container">
        {props.itemName}
        <input
          type="checkbox"
          checked={props.itemValue}
          onChange={props.onCheckboxChange}
          className="form-check-input"
          id="my-checkbox"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default Itemcheck;
