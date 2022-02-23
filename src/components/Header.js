import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { StaticImage } from "gatsby-plugin-image";

import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = ({ topMenu, activeDocMeta }) => {
  const currentLang = activeDocMeta.lang;

  const renderedMenuLinks = topMenu
    ? topMenu.menu_links.map((menuLink, index) => (
        <li key={`top-nav-${index}`}>
          <PrismicLink href={menuLink.link.url}>
            <PrismicText field={menuLink.label.richText} />
          </PrismicLink>
        </li>
      ))
    : null;

  const indexRoute = currentLang === "en-us" ? "/en-us" : "/";

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 88);
    });
  }, []);

  return (
    <header className={scroll ? "header header--active" : "header"}>
      <div className="container">
        <div className="header__inner">
          <div className="menu">
            <Link to={indexRoute}>
              <StaticImage
                src="../images/logo.png"
                alt="Site logo"
                placeholder="none"
                className="logo"
              />
            </Link>
          </div>
          <div className="menu">
            <ul>
              {renderedMenuLinks}
              <LanguageSwitcher activeDocMeta={activeDocMeta} />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export const query = graphql`
  fragment TopMenuFragment on PrismicTopMenu {
    _previewable
    type
    lang
    data {
      menu_links {
        label {
          richText
          html
          text
        }
        link {
          id
          url
        }
      }
    }
  }
`;
