// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = async function createConfigAsync() {
  return {
    title: "Docs Previewer",
    tagline: "Documentation for Seqera Labs products",
    favicon: "img/favicon--dynamic.svg",

    // Set the production url of your site here
    url: "https://docs.seqera.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "seqeralabs", // Usually your GitHub org/user name.
    projectName: "docs-previewer", // Usually your repo name.

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    presets: [
      [
        "classic",
        {
          docs: {
            routeBasePath: "/",
            sidebarPath: "docs/sidebar.json",
            editUrl: "https://github.com/seqeralabs/docs/tree/master/",
            remarkPlugins: [(await import("remark-code-import")).default],
          },
          theme: {
            customCss: [
              require.resolve("./src/css/branding.css"),
              require.resolve("./src/css/fonts/inter.css"),
              require.resolve("./src/css/fonts/degular.css"),
            ],
          },
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
          logo: {
            alt: "Seqera Docs Previewer",
            src: "img/logo2-dark.png",
            srcDark: "img/logo2-dark.png",
          },
          items: [
            {
              type: "docSidebar",
              sidebarId: "sidebar",
              position: "left",
              label: "Previewer",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [],
          copyright: `${new Date().getFullYear()} © Seqera`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["json", "yaml"],
        },
      }),
  };
};
