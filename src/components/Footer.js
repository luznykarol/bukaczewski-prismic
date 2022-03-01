import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Link } from "gatsby";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";
import facebookIcon from "../images/facebook.png";

export const Footer = ({ indexRoute, topMenu }) => {
  const renderedMenuLinks =
    topMenu &&
    topMenu.menu_links.map((menuLink, index) => (
      <PrismicLink
        key={`footer-link-${index}`}
        className="footer__link"
        href={menuLink.link.url}>
        <PrismicText field={menuLink.label.richText} />
      </PrismicLink>
    ));

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Link to={indexRoute}>
            <div className="menu">
              <StaticImage
                src="../images/logo.png"
                alt="Site logo"
                placeholder="none"
                className="logo"
              />
            </div>
          </Link>

          <nav className="footer__list">
            <div className="footer__list__title">Menu</div>
            {renderedMenuLinks}
          </nav>

          <div className="social">
            <img src={facebookIcon} alt="Facebook social icon" />
            <img src={instagramIcon} alt="Instagram social icon" />
            <img src={twitterIcon} alt="Twitter social icon" />
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} by Łukasz Bukaczewski
        </p>
      </div>
    </footer>
  );
};
