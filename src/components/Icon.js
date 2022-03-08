import React from "react";
import ArrowDown from "../icons/arrowDown";
import Linkedin from "../icons/linkedin";
import Phone from "../icons/phone";
import Email from "../icons/email";
import Address from "../icons/address";
import Logo from "../icons/logo";
import ArrowRight from "../icons/arrowRight";

const Icon = ({ icon, className }) => {
  const icons = {
    arrowDown: ArrowDown,
    linkedin: Linkedin,
    email: Email,
    phone: Phone,
    address: Address,
    logo: Logo,
    arrowRight: ArrowRight,
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
