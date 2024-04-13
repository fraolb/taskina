import React from "react";
import "./checkbox.css"; // Import your CSS file for styling

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="checkboxContainer">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
