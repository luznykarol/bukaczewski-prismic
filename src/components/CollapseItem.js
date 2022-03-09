import React from "react";
import SlideToggle from "react-slide-toggle";
// import { RichText } from "prismic-reactjs";
import { PrismicRichText } from "@prismicio/react";
// import htmlSerializer from "../utils/HtmlSerializer";
import Icon from "./Icon";

export default function Question({ item, active, toggleQuestion, id }) {
  const { list, title } = item;
  console.log("AAAAA", item);
  // const { question, answer, icon, position } = item;

  const faqClass =
    "faq cursor-pointer relative self-start flex flex-col flex flex-col justify-center items-start mb-6";

  const innerClass =
    "bg-cam-purple-light rounded-md px-4 md:px-6 relative w-full flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer";
  return (
    <SlideToggle
      collapsed
      collapseEvent={active === false && Date.now()}
      expandEvent={active === true && Date.now()}>
      {({ setCollapsibleElement }) => (
        <article
          className="collapse__item"
          onClick={() => toggleQuestion(active ? null : id)}>
          <div className="collapse__item__inner">
            {/* <Icon className="faq-icon" icon={icon} /> */}
            <div className="md:ml-8 pb-4 md:py-6 w-full">
              <div className="collapse__title">
                <h4
                  className="text-lg leading-6 font-semibold text-cam-white transition-colors duration-300 ease-in-out
              ">
                  {title?.text && title.text}
                </h4>
                <Icon
                  className={
                    active
                      ? "collapse__icon collapse__icon--active"
                      : "collapse__icon"
                  }
                  icon="arrowDown"
                />
              </div>

              <div ref={setCollapsibleElement}>
                <div className="collapse__list">
                  <PrismicRichText field={list?.richText} />
                  {/* <RichText
                    render={answer.raw}
                    htmlSerializer={htmlSerializer}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </SlideToggle>
  );
}
