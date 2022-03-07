import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ScrollLink = ({ onClick, text, className, href }) => {
  return (
    <AnchorLink
      className={className}
      onAnchorLinkClick={onClick}
      to={`/#${href}`}
      title="Our team">
      {text}
    </AnchorLink>
  );
};

export default ScrollLink;
