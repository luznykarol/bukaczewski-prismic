import React, { useState } from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
// import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useTeam } from "../hooks/use-team";
import CollapseItem from "../components/CollapseItem";

export const TeamSection = ({ slice }) => {
  const [textOverflow, setTextOverflow] = useState(false);

  const team = useTeam();

  const handleClick = (e) => {
    e.preventDefault();
    setTextOverflow(!textOverflow);
  };

  const [currentActiveQuestion, setCurrentActiveQuestion] = useState(null);

  console.log(team);

  const lists = [
    { title: { text: "Specjalizacje" }, list: { ...team.specializations } },
    { title: { text: "Doświadczenie" }, list: { ...team.experience } },
    { title: { text: "Edukacja" }, list: { ...team.education } },
    { title: { text: "Języki" }, list: { ...team.languages } },
  ];

  console.log(lists);
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
            <h2 className="team__mobile__name">{team.name.text}</h2>
            <span className="team__mobile__position">{team.position.text}</span>
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
          <div className="team__lists">
            {lists.map((item, i) => {
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
        </article>

        <article className="team__item">
          <div className="team__item--upper">
            <div className="teamouter">
              <GatsbyImage
                image={team?.image.gatsbyImageData}
                className="team__image"
                alt={team.name.text}
              />
            </div>
            <div className="team__box">
              <div
                className={
                  textOverflow
                    ? "team__box__text team__box__text--open"
                    : "team__box__text"
                }>
                <div className="team__box__header">
                  <h2>{team.name.text}</h2>
                  <span className="team__text__position">
                    {team.position.text}
                  </span>
                </div>
                <PrismicRichText field={team.description.richText} />
              </div>

              <button className="team__button" onClick={handleClick}>
                {textOverflow ? "Mniej" : "Wczytaj więcej"}
              </button>
            </div>
          </div>
          <div className="team__item--lower">
            <div className="team__lists">
              <div className="team__list">
                <div className="team__list__header">Specjalizacje</div>
                <PrismicRichText field={team.specializations.richText} />
              </div>
              <div className="team__list">
                <div className="team__list__header">Doświadczenie</div>
                <PrismicRichText field={team.experience.richText} />
              </div>
              <div className="team__list">
                <div className="team__list__header">Edukacja</div>
                <PrismicRichText field={team.education.richText} />
              </div>
              <div className="team__list">
                <div className="team__list__header">Języki</div>
                <PrismicRichText field={team.languages.richText} />
              </div>
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
