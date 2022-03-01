import React from "react";
import ArrowDown from "../icons/arrowDown";

const Icon = ({ icon, className }) => {
  const icons = {
    arrowDown: ArrowDown,
  };

  const Icon = icons[icon];
  return (
    <>
      {icon && (
        <div className={className}>
          <Icon />
        </div>
      )}
    </>
  );
};

export default Icon;
