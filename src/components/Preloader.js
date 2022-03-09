import React from "react";
import Icon from "./Icon";
const Preloader = () => {
  return (
    <div id="loader-wrapper">
      <div id="loader">
        <Icon className="loader-icon" icon="logo" />
      </div>
    </div>
  );
};

export default Preloader;
