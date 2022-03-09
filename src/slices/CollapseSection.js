import React, { useState } from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import ContactForm from "../components/Form";
import { useContact } from "../hooks/use-contact";
import Icon from "../components/Icon";
import CollapseItem from "../components/CollapseItem";

const CollapseSection = ({ slice }) => {
  const [currentActiveQuestion, setCurrentActiveQuestion] = useState(null);

  const { primary, items } = slice;

  return (
    <section className="collapse__section" id="collapseSection">
      <div className="container">
        {primary.title.text !== "" && (
          <div className="collapse__text">
            <h2>{primary.title.text}</h2>
            <PrismicRichText field={primary.description.richText} />
          </div>
        )}

        <div className="collapse__container">
          {items.map((item, i) => {
            return (
              <CollapseItem
                key={i}
                id={i + 1}
                item={item}
                active={i + 1 === currentActiveQuestion}
                toggleQuestion={setCurrentActiveQuestion}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollapseSection;

export const query = graphql`
  fragment PageDataBodyCollapseSection on PrismicPageDataBodyCollapseSection {
    primary {
      description {
        richText
        text
      }
      title {
        text
      }
    }
    items {
      title {
        text
      }
      list {
        richText
      }
    }
  }
`;
