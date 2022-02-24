import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const HeaderNav = ({
  renderedMenuLinks,
  activeDocMeta,
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <div
      className={
        menuOpen
          ? "header__list--mobile header__list--mobile--open"
          : "header__list--mobile "
      }>
      <ul>
        {renderedMenuLinks}
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
      </ul>
    </div>
  );
};

export default HeaderNav;
