import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { createHistory } from "@reach/router";
import { linkResolver } from "../utils/linkResolver";

export const LanguageSwitcher = ({ activeDocMeta }) => {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [langValue, setLangValue] = useState("");

  const currLang = activeDocMeta.lang;

  const altLang = activeDocMeta.alternateLanguages.map((altLang) =>
    linkResolver(altLang)
  )[0];

  const handleLangChange = () => {
    if (checkboxValue === false) {
      setCheckboxValue(!checkboxValue);
      setLangValue(altLang);
      navigate(altLang);
    } else {
      setCheckboxValue(!checkboxValue);
      setLangValue(currLang);
      navigate(currLang);
    }
  };

  useEffect(() => {
    let history = createHistory(window);

    if (history.location.pathname.includes("/en-us")) {
      setLangValue(true);
    } else {
      setLangValue(false);
    }
  }, []);

  return (
    <li
      className={
        langValue ? "language-switcher blue" : "language-switcher red"
      }>
      <label
        htmlFor="language"
        className={langValue ? "lang english" : "lang polish"}>
        <input
          id="language"
          onChange={handleLangChange}
          type="checkbox"
          value={langValue}
        />
      </label>
    </li>
  );
};
