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
              <StaticImage
                src="../images/logo.png"
                alt="Site logo"
                placeholder="none"
                className="logo"
              />
            </div>
          </Link>
          <div className="footer__lists">
            <nav className="footer__list">
              <div className="footer__list__title">Menu</div>
              {renderedMenuLinks}
            </nav>

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
            <div className="footer__social">
              <Icon className="footer__social__icon" icon="linkedin" />
            </div>
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} by Łukasz Bukaczewski
        </p>
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
