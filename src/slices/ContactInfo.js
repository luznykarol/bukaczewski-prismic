import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";

export const ContactInfo = ({ slice }) => (
  <section className="contact-info">KONTAKT</section>
);

export const query = graphql`
  fragment PageDataBodyContactInfo on PrismicPageDataBodyContactInfo {
    primary {
      section_title {
        richText
      }
    }
  }
  fragment HomepageDataBodyContactInfo on PrismicHomepageDataBodyContactInfo {
    primary {
      section_title {
        richText
      }
    }
  }
`;
