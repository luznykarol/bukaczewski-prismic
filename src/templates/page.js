import * as React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { SliceZone } from "@prismicio/react";

import { Layout } from "../components/Layout";
import { components } from "../slices";

const PageTemplate = ({ data }) => {
  if (!data) return null;

  const pageContent = data.prismicPage;
  const page = pageContent.data || {};
  const topMenu = data.prismicTopMenu || {};
  const contactInfo = data.prismicContactInfo || {};

  const { lang, type, url } = pageContent;
  const alternateLanguages = pageContent.alternate_languages || [];
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  };

  return (
    <Layout
      contactInfo={contactInfo.data}
      topMenu={topMenu.data}
      activeDocMeta={activeDoc}>
      <SliceZone
        contactInfo={contactInfo.data}
        slices={page.body}
        components={components}
      />
    </Layout>
  );
};

export const query = graphql`
  query pageQuery($id: String, $lang: String) {
    prismicPage(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      url
      uid
      type
      id
      lang
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        body {
          ... on PrismicSliceType {
            id
            slice_label
            slice_type
          }
          ...PageDataBodyEmailSignup
          ...PageDataBodyFullWidthImage
          ...PageDataBodyHeadlineWithButton
          ...PageDataBodyInfoWithImage
          ...PageDataBodyTextInfo
          ...PageDataBodyContactsection
          ...PageDataBodyCollapseSection
        }
      }
    }
    prismicTopMenu(lang: { eq: $lang }) {
      ...TopMenuFragment
    }
    prismicContactInfo(lang: { eq: $lang }) {
      ...ContactInfoFragment
    }
  }
`;

export default withPrismicPreview(PageTemplate);
