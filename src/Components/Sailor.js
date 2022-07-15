import React from "react";
import Scouts from "../Images/Scouts.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Sailor() {
  return (
    <div className="Scouts">
      <img
        src={Scouts}
        alt="scouts"
        className="scouts"
        height="200"
        width="200"
      />
    </div>
  );
}

export default Sailor;
