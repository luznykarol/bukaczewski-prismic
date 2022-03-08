import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useTeam } from "../hooks/use-team";

export const AboutSection = ({ slice }) => {
  const { items, primary } = slice;

  const team = useTeam();
  console.log("TEAM", team);

  console.log(team);
  return (
    <section className="cta__section" id="ourTeam">
      <div className="container">
        <div className="text__container">
          Test
          <PrismicRichText field={primary.description.richText} />
        </div>
        <div className="cta__container"></div>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment PageDataBodyAboutSection on PrismicPageDataBodyAboutSection {
    id
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
