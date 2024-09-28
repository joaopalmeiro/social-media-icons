import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "social-media-icons",
  description: "SVG files for social media icons.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Figma",
        link: "https://www.figma.com/community/file/1098022441810511046",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting Started", link: "/getting-started" }],
      },
      { text: "Icons", link: "/icons" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/joaopalmeiro/social-media-icons",
        ariaLabel: "GitHub repo",
      },
      {
        icon: "npm",
        link: "https://www.npmjs.com/package/social-media-icons",
        ariaLabel: "npm package",
      },
      {
        icon: "mastodon",
        link: "https://ciberlandia.pt/@joaopalmeiro",
        ariaLabel: "Mastodon profile",
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/joaopalmeiro/social-media-icons/edit/main/docs/:path",
    },
  },
  cleanUrls: true,
  appearance: true,
  lastUpdated: true,
  vite: {
    server: {
      open: true,
    },
  },
});
