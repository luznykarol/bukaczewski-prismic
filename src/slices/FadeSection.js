import React, { useEffect, useState, useRef } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Icon from "../components/Icon";
import AnchorLink from "../components/AnchorLink";
// import { PrismicRichText } from "@prismicio/react";

export const FadeSection = ({ slice }) => {
  const { items, primary } = slice;

  const arrLength = items.length;

  const [imageIndex, setImageIndex] = useState(1);
  const ref = useRef();

  useEffect(() => {
    if (items.length > 1) {
      ref.current = setInterval(() => {
        if (imageIndex < arrLength) {
          setImageIndex(imageIndex + 1);
        } else {
          setImageIndex(1);
        }
      }, 4000);
      return () => {
        clearInterval(ref.current);
      };
    }
  }, [imageIndex]);

  return (
    <section className="fade__section">
      <div className="fade__container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`fade__item fade__item--${
              index + 1 === imageIndex ? "visible" : "fade"
            }`}>
            <GatsbyImage
              alt="alt"
              style={{ position: "absolute" }}
              className={`fade__image`}
              image={item.image?.gatsbyImageData}
              // alt={item.image?.alt}
            />
            <div className="container">
              <h2
                className={` ${
                  index + 1 === imageIndex
                    ? "fade__text fade__text--visible"
                    : "fade__text"
                }`}>
                {item.title.text}
              </h2>
            </div>
          </div>
        ))}
        <div className="fade__link">
          <div className="fade__link__inner">
            {/* Dowiedz się więcej */}
            <Icon className="icon icon__arrowDown" icon="arrowDown" />
            <AnchorLink title="" href={`/#ourTeam`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment HomepageDataBodyFadesection on PrismicHomepageDataBodyFadesection {
    primary {
      section_id {
        text
      }
    }
    items {
      title {
        text
      }
      image {
        gatsbyImageData
      }
    }
  }
`;
