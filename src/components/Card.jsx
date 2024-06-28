import "./Card.css";
import React from "react";

function getColors(props) {
  if (props.red) return "Red";
  if (props.green) return "Green";
  if (props.blue) return "Blue";
  if (props.purple) return "Purple";
  if (props.brown) return "Brown";
  if (props.pink) return "Pink";
  if (props.yellow) return "Yellow";
}

export default (props) => {
  return (
    <div className={`Card ${getColors(props)}`}>
      <div className="Header">
        <span className="Title">{props.title}</span>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
