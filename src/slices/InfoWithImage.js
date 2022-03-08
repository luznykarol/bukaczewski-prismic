import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { PrismicRichText } from "@prismicio/react";
import Icon from "../components/Icon";
import AnchorLink from "../components/AnchorLink";

export const InfoWithImage = ({ slice }) => {
  const featuredImage = slice.primary.featured_image;

  return (
    <section className="info-with-image">
      <div className="featured-image">
        {/* <GatsbyImage
          image={featuredImage?.thumbnails?.mobile?.gatsbyImageData}
          // alt={featuredImage?.alt}
          alt="aaa"
          className="mobile-thumbnail"
        />
        <GatsbyImage
          image={featuredImage?.thumbnails?.tablet?.gatsbyImageData}
          // alt={featuredImage?.alt}
          alt="aaa"
          className="tablet-thumbnail"
        /> */}
        <GatsbyImage
          image={featuredImage?.gatsbyImageData}
          // alt={featuredImage?.alt}
          alt="aaa"
          className="desktop"
        />
      </div>
      <div className="container">
        <div className="text-content">
          <PrismicRichText
            className="text-content"
            field={slice.primary.section_title.richText}
          />
        </div>
      </div>
      <div className="info-with-image__link">
        <div className="info-with-image__link__inner">
          {/* Dowiedz się więcej */}
          <Icon className="icon icon__arrowDown" icon="arrowDown" />
          {/* <AnchorLink title="" href={`${primary.section_id.text}`} /> */}
          <AnchorLink title="" href="#collapseSection" />
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment PageDataBodyInfoWithImage on PrismicPageDataBodyInfoWithImage {
    primary {
      featured_image {
        url
        gatsbyImageData
        alt
        thumbnails {
          mobile {
            url
            gatsbyImageData
            alt
          }
          tablet {
            url
            gatsbyImageData
            alt
          }
        }
      }
      section_title {
        richText
      }
      text {
        richText
      }
    }
  }
  fragment HomepageDataBodyInfoWithImage on PrismicHomepageDataBodyInfoWithImage {
    primary {
      featured_image {
        gatsbyImageData
        alt
        thumbnails {
          mobile {
            gatsbyImageData
            alt
          }
          tablet {
            gatsbyImageData
            alt
          }
        }
      }
      section_title {
        richText
      }
      text {
        richText
      }
    }
  }
`;
