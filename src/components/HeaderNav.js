import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const HeaderNav = ({
  renderedMenuLinks,
  activeDocMeta,
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <ul
      className={
        menuOpen
          ? "header__list--mobile header__list--mobile--open"
          : "header__list--mobile "
      }>
      {renderedMenuLinks}
      <LanguageSwitcher activeDocMeta={activeDocMeta} />
      <div className="shadow"></div>
    </ul>
  );
};

export default HeaderNav;
