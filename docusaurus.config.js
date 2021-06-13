/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "CellStrat Hub Docs",
  tagline: "The All-in-One Platform for Machine Learning",
  url: "https://docs.cellstrathub.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CellStratAI",
  projectName: "cellstrat-hub-docs",
  themeConfig: {
    navbar: {
      title: "CellStrat Hub Docs",
      logo: {
        alt: "CellStrat Logo",
        src: "img/oglogo.svg",
      },
      items: [
        {
          to: "https://cellstrathub.com/sign-up",
          label: "Sign Up",
          position: "left",
        },
        {
          to: "https://console.cellstrathub.com/",
          label: "Sign In",
          position: "left",
        },
        {
          href: "https://github.com/CellStratAI/cellstrat-hub-docs",
          label: "Contribute on GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/cellstrat/",
            },
            {
              label: "Discord",
              href: "https://discord.gg/mWJzjyVfC9",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/cellstrat",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/CellStratAI/cellstrat-hub-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CellStrat`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            "https://github.com/CellStratAI/cellstrat-hub-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
