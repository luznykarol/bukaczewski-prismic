import * as React from "react";

import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";
import facebookIcon from "../images/facebook.png";

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="flexBetween">
        <p className="copyright">
          &copy; {new Date().getFullYear()} by Łukasz Bukaczewski
        </p>
        <div className="social">
          <img src={facebookIcon} alt="Facebook social icon" />
          <img src={instagramIcon} alt="Instagram social icon" />
          <img src={twitterIcon} alt="Twitter social icon" />
        </div>
      </div>
    </div>
  </footer>
);
