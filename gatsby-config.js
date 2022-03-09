const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const prismicConfig = require("./prismic-configuration");

module.exports = {
  siteMetadata: {
    title: "Bukaczewski Legal | Kancelaria Radcy Prawnego Warszawa",
    description: "Usługi prawne",
  },
  plugins: [
    "gatsby-plugin-preload-fonts",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: prismicConfig.prismicRepo,
        // accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          page: require("./custom_types/page.json"),
          top_menu: require("./custom_types/top_menu.json"),
          contact_info: require("./custom_types/contact_info.json"),
          team_member: require("./custom_types/team_member.json"),
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-prismic-previews',
    //   options: {
    //     repositoryName: prismicConfig.prismicRepo,
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Bukaczewski",
        short_name: "Bukaczewski",
        start_url: "/",
        background_color: "#27374c",
        theme_color: "#27374c",
        display: "minimal-ui",
        icon: path.resolve(__dirname, "src", "images", "favicon.png"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve(__dirname, "src", "images"),
      },
    },
  ],
};
