import React, { useEffect, useState } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";

export const FadeSection = ({ slice }) => {
  const images = slice.items;
  const arrLength = images.length;

  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    if (images) {
      setInterval(() => {
        if (imageIndex < arrLength) {
          setImageIndex(imageIndex + 1);
        } else {
          setImageIndex(1);
        }
      }, 5000);
    }
  }, [imageIndex]);

  return (
    <section className="FadeSection">
      <div className="fadeContainer">
        {images.map((item, index) => (
          <div
            key={index}
            className={`fadeItem fadeItem-${
              index + 1 === imageIndex ? "visible" : "fade"
            }`}>
            <GatsbyImage
              alt="alt"
              className={`fadeImage fadeImage`}
              image={item.image?.gatsbyImageData}
              // alt={item.image?.alt}
            />
            <h2 className="fadeText">{item.title.text}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export const query = graphql`
  fragment HomepageDataBodyFadesection on PrismicHomepageDataBodyFadesection {
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
