import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { repositoryConfigs } from "./src/utils/prismicPreviews";
import "./src/stylesheets/main.scss";

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ]);
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <img
        src="/images/favicon.png"
        alt="logo"
        style={{ height: "calc(3.23625vw + 77.86408px)" }}
      />
      <div className="preloader_animation"></div>
    </div>,
  ]);
  setBodyAttributes({
    className: "preloader_active",
  });
  setPostBodyComponents([<script src="/scripts/preloader.js" />]);
};
