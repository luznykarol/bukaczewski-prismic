import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { StaticImage } from "gatsby-plugin-image";
import HeaderNav from "./HeaderNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Icon from "./Icon";

export const Header = ({ topMenu, activeDocMeta, indexRoute }) => {
  const renderedMenuLinks =
    topMenu &&
    topMenu.menu_links.map((menuLink, index) => (
      <Link
        className="nav__link"
        activeClassName="nav__link--active"
        to={menuLink.link.url}>
        <PrismicText field={menuLink.label.richText} />
      </Link>
    ));

  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const handleScroll = () => setScroll(window.scrollY > 88);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scroll ? "header header--active" : "header"}>
      <div className="container">
        <div className="header__inner">
          <div className="menu">
            <Link to={indexRoute}>
              <Icon className="logo" icon="logo" />
            </Link>
          </div>

          <div className="header__list">
            <ul>
              {renderedMenuLinks}
              <LanguageSwitcher activeDocMeta={activeDocMeta} />
            </ul>
          </div>

          <button
            aria-label="Open mobile menu"
            className={menuOpen ? "nav__btn nav__btn--open" : "nav__btn"}
            onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <HeaderNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeDocMeta={activeDocMeta}
        renderedMenuLinks={renderedMenuLinks}
      />
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
