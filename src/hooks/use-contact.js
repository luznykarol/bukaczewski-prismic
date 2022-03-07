import { useStaticQuery, graphql } from "gatsby";
export const useContact = () => {
  const {
    allPrismicContactInfo: { edges: data },
  } = useStaticQuery(
    graphql`
      query ContactQuery {
        allPrismicContactInfo {
          edges {
            node {
              id
              data {
                address {
                  richText
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
                title {
                  text
                }
              }
            }
          }
        }
      }
    `
  );
  return data[0].node.data;
};
