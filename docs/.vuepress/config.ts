import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/utools/",
  lang: "zh-CN",
  title: "@lanseria/utools",
  description: "Alternative JavaScript Tool Library.",
  head: [
    ["link", { rel: "manifest", href: "./manifest.webmanifest" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "./images/icons/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "./images/icons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "./images/icons/favicon-16x16.png",
      },
    ],
    [
      "link",
      { rel: "mask-icon", href: "./images/icons/safari-pinned-tab.svg" },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "msapplication-TileColor", content: "#2b5797" }],
    // ...其他标签
  ],
  themeConfig: {
    logo: "./images/icons/android-chrome-96x96.png",
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        skipWaiting: false,
      },
    ],
    [
      "@vuepress/plugin-pwa-popup",
      {
        locales: {
          "/": {
            message: "发现新内容可用",
            buttonText: "刷新",
          },
        },
      },
    ],
  ],
});
