import { useStaticQuery, graphql } from "gatsby";
export const useTeam = () => {
  const {
    allPrismicTeamMember: { edges: data },
  } = useStaticQuery(
    graphql`
      query TeamQuery {
        allPrismicTeamMember {
          edges {
            node {
              id
              data {
                description {
                  richText
                }
                image {
                  gatsbyImageData
                }
                name {
                  text
                }
                position {
                  text
                }
                specializations {
                  richText
                }
                experience {
                  richText
                }
                education {
                  richText
                }
                languages {
                  richText
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
