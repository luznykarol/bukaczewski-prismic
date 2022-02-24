import React, { useEffect, useState, useRef } from "react";
import { Link, graphql } from "gatsby";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { StaticImage } from "gatsby-plugin-image";
import HeaderNav from "./HeaderNav";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const node = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (node.current.contains(e.target)) {
      return;
    }
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

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

          <div className="header__list">
            <ul>
              {renderedMenuLinks}
              <LanguageSwitcher activeDocMeta={activeDocMeta} />
            </ul>
          </div>
          <HeaderNav
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            activeDocMeta={activeDocMeta}
            renderedMenuLinks={renderedMenuLinks}
          />
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
