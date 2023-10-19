import React from "react";
import "./LoadingSpinner.css";
import logo from "../../assets/image/cac-logo.png"

export default function LoadingSpinner() {
  return (
    <div className="center">
    <div className="loader">
      <img src={logo} alt="" />
    </div>
</div>
  );
}