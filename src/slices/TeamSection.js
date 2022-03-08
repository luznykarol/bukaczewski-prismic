import React, { useState } from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
// import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useTeam } from "../hooks/use-team";

export const TeamSection = ({ slice }) => {
  const [textOverflow, setTextOverflow] = useState(false);
  console.log("SLICE", slice);

  const team = useTeam();
  console.log("TEAM", team);

  const handleClick = (e) => {
    e.preventDefault();
    setTextOverflow(!textOverflow);
  };

  return (
    <section className="team__section">
      <div className="container">
        <article className="team__mobile__item">
          <GatsbyImage
            image={team?.image.gatsbyImageData}
            className="team__mobile__image"
            alt={team.name.text}
          />
          <div className="team__mobile__text">
            <span className="team__mobile__position">{team.position.text}</span>
            <h2 className="team__mobile__name">{team.name.text}</h2>
          </div>

          <div
            className={
              textOverflow
                ? "team__mobile__box team__mobile__box--open"
                : "team__mobile__box"
            }>
            <PrismicRichText field={team.description.richText} />
          </div>
          <button className="team__button" onClick={handleClick}>
            {textOverflow ? "Mniej" : "Wczytaj więcej"}
          </button>
          <div className="team__list">
            <div className="team__list__header">Specjalizacje</div>
            <PrismicRichText field={team.specializations.richText} />
          </div>
        </article>

        <article className="team__item">
          <GatsbyImage
            image={team?.image.gatsbyImageData}
            className="team__image"
            alt={team.name.text}
          />
          <div className="team__box">
            <div
              className={
                textOverflow
                  ? "team__box__text team__box__text--open"
                  : "team__box__text"
              }>
              <span className="team__text__position">{team.position.text}</span>
              <h2>{team.name.text}</h2>
              <PrismicRichText field={team.description.richText} />
            </div>
            <button className="team__button" onClick={handleClick}>
              {textOverflow ? "Mniej" : "Wczytaj więcej"}
            </button>
            <div className="team__list">
              <div className="team__list__header">Specjalizacje</div>
              <PrismicRichText field={team.specializations.richText} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

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
