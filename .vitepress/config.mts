import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar({
  srcDir: "docs",

  title: "GD Docs",
  description: "Documentation for Geometry Dash",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/logo.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: "Endpoints", link: "/endpoints" }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rifct/gd-docs' }
    ],

    editLink: {
      pattern: 'https://github.com/Rifct/gd-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: true,

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: false,
      next: false,
    }
  },

  head: [
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "96x96", href: "/logo96.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "192x192", href: "/logo192.png" }],
  ]

}, {
  documentRootPath: '/docs',
  collapsed: false,
  underscoreToSpace: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  sortFolderTo: "top",
  useFolderTitleFromIndexFile: true
}));
