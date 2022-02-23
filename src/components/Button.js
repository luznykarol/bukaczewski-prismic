import React from "react";

const Button = ({ text, className }) => {
  return (
    <button type="submit" className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
