import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import { Link, graphql } from "gatsby";
import Icon from "../components/Icon";

export const Footer = ({ indexRoute, topMenu, contactInfo }) => {
  const { address, email, linkedin, phone, title } = contactInfo;

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
          <Link className="footer__logo" to={indexRoute}>
            <div className="menu">
              <Icon className="logo" icon="logo" />
            </div>
          </Link>
          <div className="footer__lists">
            <nav className="footer__list">{renderedMenuLinks}</nav>

            <ul className="footer__contact">
              <a className="footer__contact__item" href={phone.url}>
                <Icon className="footer__icon" icon="phone" />
                {phone.url.substr(5)}
              </a>

              <a className="footer__contact__item" href={email.url}>
                <Icon className="footer__icon" icon="email" />
                {email.url.substr(8)}
              </a>
              <li className="footer__contact__item">
                <Icon className="footer__icon" icon="address" />
                <PrismicRichText field={address.richText} />
              </li>
            </ul>
            <div className="footer__social padtop">
              <a rel="noopener noreferrer" target="_blank" href={linkedin.url}>
                <Icon className="footer__social__icon" icon="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p className="">
            &copy; {new Date().getFullYear()} by Łukasz Bukaczewski
          </p>
        </div>
      </div>
    </footer>
  );
};

export const query = graphql`
  fragment ContactInfoFragment on PrismicContactInfo {
    _previewable
    type
    lang
    data {
      title {
        text
      }
      email {
        url
      }
      linkedin {
        url
      }
      phone {
        url
      }
      address {
        richText
      }
    }
  }
`;
