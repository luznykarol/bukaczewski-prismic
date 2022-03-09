import * as React from "react";
import { Link } from "gatsby";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { PrismicProvider } from "@prismicio/react";

import { repositoryConfigs } from "./src/utils/prismicPreviews";
import { linkResolver } from "./src/utils/linkResolver";

import "./src/stylesheets/main.scss";

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}>
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);

export const onPreRouteUpdate = () => {
  setTimeout(() => {
    document.getElementById("loader-wrapper").classList.add("loader-inactive");
  }, 1500);
  setTimeout(() => {
    document.getElementById("loader-wrapper").classList.add("loader-aaa");
  }, 1700);
};

// var body = document.querySelector("body");
// document.onreadystatechange = function () {
//   if (document.readyState === "complete") {
//     body.classList.add("preloader_ready");
//     setTimeout(function () {
//       body.classList.remove("preloader_active");
//       body.classList.remove("preloader_ready");
//     }, 500);
//     console.log("DUPA");
//   }
// };
