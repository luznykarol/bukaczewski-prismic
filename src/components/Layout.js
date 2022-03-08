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

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, contactInfo);
    }
    return child;
  });

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
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}
      </Helmet>
      <Header
        topMenu={topMenu}
        indexRoute={indexRoute}
        activeDocMeta={activeDocMeta}
      />
      <main>
        {/* <>{React.cloneElement(children, { contactInfo: contactInfo })}</>
        {children} */}
        {childrenWithProps}
      </main>
      <Footer
        contactInfo={contactInfo}
        topMenu={topMenu}
        indexRoute={indexRoute}
      />
    </>
  );
};
