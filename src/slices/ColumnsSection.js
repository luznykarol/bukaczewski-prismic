import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import Icon from "../components/Icon";
import CtaItem from "../components/CtaItem";

export const ColumnsSection = ({ slice }) => {
  const { items } = slice;

  console.log(items);

  return (
    // <section className="columns__section" id="ourTeam">
    //   <div className="container">
    //     <div className="columns__container">
    //       {items.map((item) => {
    //         console.log("ITEM", item);
    //         return (
    //           <article className="columns__item">
    //             <h3>{item.title2.text}</h3>
    //             <PrismicRichText field={item.description1.richText} />
    //           </article>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
    <></>
  );
};

export const query = graphql`
  fragment HomepageDataBodyColumnsSection on PrismicHomepageDataBodyColumnsSection {
    items {
      description1 {
        richText
      }
      image1 {
        gatsbyImageData
      }
      title2 {
        text
      }
    }
  }
`;
