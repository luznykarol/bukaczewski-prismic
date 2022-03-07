import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { StaticImage } from "gatsby-plugin-image";

export const TeamSection = ({ slice }) => (
  <section className="text-info">
    <div className="container">
      {/* <div className="left-column">
        <PrismicRichText field={slice.primary.section_title.richText} />
        <PrismicRichText field={slice.primary.left_column_text.richText} />
      </div>
      <div className="right-column">
        <PrismicRichText field={slice.primary.right_column_text.richText} />
      </div> */}
      test
    </div>
  </section>
);

export const query = graphql`
  fragment PageDataBodyTeamSection on PrismicPageDataBodyTeamSection {
    primary {
      title {
        text
      }
      description {
        richText
      }
    }
  }
`;
