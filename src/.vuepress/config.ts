import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "卓的个人博客",
  description: "博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
