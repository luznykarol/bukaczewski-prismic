import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ScrollLink = ({ onClick, className, href }) => {
  return <AnchorLink className={className} to={href} />;
};

export default ScrollLink;
