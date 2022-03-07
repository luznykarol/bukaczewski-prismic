import React from "react";
import { Link } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const CtaItem = ({ item }) => {
  const { button_text, description, image, link, title1 } = item;
  return (
    <div className="cta__item">
      <GatsbyImage
        alt="alt"
        // style={{ position: "absolute" }}
        className="cta__item__image"
        image={image.gatsbyImageData}
        // alt={item.image?.alt}
      />
      <div className="cta__inner">
        <h3>{title1.text}</h3>
        <PrismicRichText field={description.richText} />
        <Link to={link.url} className="button button--black">
          {button_text.text}
        </Link>
      </div>
    </div>
  );
};

export default CtaItem;
