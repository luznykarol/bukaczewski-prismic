import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Seo from "./Seo";
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

  console.log("QUERY", queryData);

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
      </Helmet>
      <Seo />
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
