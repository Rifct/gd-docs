import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar({
  srcDir: "docs",
  
  title: "GD Docs",
  description: "Documentation for Geometry Dash",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: "Endpoints", link: "/endpoints" }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rifct/gd-docs' }
    ]
  }
}, {
  documentRootPath: '/docs',
  collapsed: false,
  underscoreToSpace: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  sortFolderTo: "top",
}));
