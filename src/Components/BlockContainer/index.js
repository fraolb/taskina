import React from "react";
import "./blockContainer.css";
import Checkbox from "../Checkbox";

const BlockContainer = ({ id, name, onChange, checked }) => {
  return (
    <div key={id} className="blockContainer">
      <div className="textBox">{name}</div>
      <Checkbox onChange={onChange} checked={checked} />
    </div>
  );
};

export default BlockContainer;
