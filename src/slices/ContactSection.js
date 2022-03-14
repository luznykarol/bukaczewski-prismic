import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { useContact } from "../hooks/use-contact";
import Icon from "../components/Icon";
import Map from "../components/Map";

export const ContactSection = ({ slice, prismicContactInfo }) => {
  const contact = useContact();

  const { address, email, linkedin, phone } = contact;

  const { title, description } = slice.primary;

  return (
    <section className="contact__section">
      <div className="container">
        <div className="grid">
          <div className="grid__col">
            <div className="text__container">
              <h2>{title.text}</h2>
              <PrismicRichText field={description.richText} />
            </div>
            <ul className="contact__list">
              <a className="contact__list__item" href={phone.url}>
                <Icon className="footer__icon" icon="phone" />
                {phone.url.substr(5)}
              </a>

              <a className="contact__list__item" href={email.url}>
                <Icon className="footer__icon" icon="email" />
                {email.url.substr(8)}
              </a>
              <li className="contact__list__item">
                <Icon className="footer__icon" icon="address" />
                <PrismicRichText field={address.richText} />
              </li>
            </ul>
          </div>

          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAP}&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="grid__col" />}
            mapElement={
              <div className="rounded-l" style={{ height: `100%` }} />
            }
          />
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment PageDataBodyContactsection on PrismicPageDataBodyContactsection {
    primary {
      title {
        text
      }
      description {
        richText
      }
    }
  }

  fragment prismicContactInfo on PrismicContactInfo {
    _previewable
    type
    lang
    data {
      title {
        text
      }
      email {
        url
      }
      linkedin {
        url
      }
      phone {
        url
      }
      address {
        richText
      }
    }
  }
`;
