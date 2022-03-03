import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, contactInfo, topMenu, activeDocMeta }) => {
  const queryData = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      prismicPage {
        url
      }
    }
  `);

  const indexRoute = activeDocMeta.lang === "en-us" ? "/en-us" : "/";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{queryData.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={queryData.site.siteMetadata.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <Header
        topMenu={topMenu}
        indexRoute={indexRoute}
        activeDocMeta={activeDocMeta}
      />
      <main>{children}</main>
      <Footer
        contactInfo={contactInfo}
        topMenu={topMenu}
        indexRoute={indexRoute}
      />
    </>
  );
};
