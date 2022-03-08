import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import Icon from "../components/Icon";
import CtaItem from "../components/CtaItem";

export const CtaSection = ({ slice }) => {
  const { items, primary } = slice;

  return (
    <section className="cta__section" id="ourTeam">
      <div className="container">
        <div className="text__container">
          <h2>Mozemy w tym pomóc!</h2>
          <PrismicRichText field={primary.description.richText} />
        </div>
        <div className="cta__container">
          {items.map((item, index) => {
            return <CtaItem key={`cta-item-${index}`} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment HomepageDataBodyCtaSection on PrismicHomepageDataBodyCtaSection {
    primary {
      description {
        richText
        text
      }
      title1 {
        text
      }
    }
    items {
      button_text {
        text
      }
      description {
        richText
      }
      image {
        gatsbyImageData
      }
      link {
        url
      }
      title1 {
        text
      }
    }
  }
`;
