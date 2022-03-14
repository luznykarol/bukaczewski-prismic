import React from "react";
import { Link } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Icon from "./Icon";
import ScrollAnimation from "react-animate-on-scroll";

const CtaItem = ({ item }) => {
  const { button_text, description, image, link, title1 } = item;

  return (
    <ScrollAnimation animateOnce className="cta__item" animateIn="fadeInUp">
      <GatsbyImage
        alt="alt"
        // style={{ position: "absolute" }}
        className="cta__item__image"
        image={image.gatsbyImageData}
        // alt={item.image?.alt}
      />
      <div className="cta__inner">
        <div className="cta__inner__text">
          <h3>{title1.text}</h3>
          <PrismicRichText field={description.richText} />
          <Link to={link.url} className="cta__button">
            {button_text.text}
            <Icon className="cta__icon" icon="arrowRight" />
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default CtaItem;
