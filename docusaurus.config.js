import { themes } from "prism-react-renderer";

export default async function createConfigAsync() {
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
            remarkPlugins: [
              (await import("remark-code-import")).default,
              (await require("remark-math")).default,
            ],
            rehypePlugins: [(await require("rehype-katex")).default],
          },
          theme: {
            customCss: [
              require.resolve("./src/css/custom.css"),
              require.resolve("./src/css/branding.css"),
              require.resolve("./src/css/fonts/inter.css"),
              require.resolve("./src/css/fonts/degular.css"),
            ],
          },
        },
      ],
    ],

    themeConfig: {
      image: "img/share.jpg",
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
        theme: themes.duotoneLight,
        darkTheme: themes.duotoneDark,
        additionalLanguages: ["json", "yaml"],
      },
    },
    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
        type: "text/css",
        integrity:
          "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
        crossorigin: "anonymous",
      },
    ],
  };
}
