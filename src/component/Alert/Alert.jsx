import React from "react";
import './Alert.css'
const Alert = (props) => {
  return (
    <div className={`alert alert-${props.t}`} role="alert">
      {props.m}
    </div>
  );
};

export default Alert;
