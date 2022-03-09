import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

// const Seo = ({ lang, meta, data }) => {
const Seo = ({ data, lang }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  console.log(site);

  // const metadata = site.siteMetadata;
  // const metaTitle = data.title || metadata.title;
  // const fullTitle = `${metaTitle} ${metadata.separator} ${metadata.title}`;
  // const metaDescription = data.description || metadata.description;
  // const metaImage = data.image || metadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      // title={metaTitle}
      // titleTemplate={`%s | ${metadata.title}`}
    >
      {/* <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <link rel="manifest" href="/img/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#07172D" /> */}
      <meta
        name="msapplication-TileImage"
        content="/img/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#07172D"></meta>
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default Seo;
