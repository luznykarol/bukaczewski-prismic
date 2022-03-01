import React from "react";

const Button = ({ text, variant }) => {
  return (
    <button type="submit" className={`button button--${variant}`}>
      {text}
    </button>
  );
};

export default Button;
