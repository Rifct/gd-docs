import { defineConfig } from 'vitepress'
import type { Sidebar, SidebarItem } from 'vitepress-sidebar/types';
import { generateSidebar } from 'vitepress-sidebar';

const sidebar = generateSidebar({
  documentRootPath: '/docs',
  collapsed: false,
  underscoreToSpace: true,
  hyphenToSpace: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  sortFolderTo: "top",
  useFolderTitleFromIndexFile: true,
  collapseDepth: 2,
});

function capitalizeEachWord(text: string): string {
  // from https://github.com/jooy2/vitepress-sidebar/blob/main/lib/helper.ts#L103
  let lastChar = '';

  for (let i = 0; i < text.length; i += 1) {
    if ((i === 0 || !/[a-zA-Z0-9]/.test(lastChar)) && /[a-z]/.test(text[i])) {
      text = text.slice(0, i) + text[i].toUpperCase() + text.slice(i + 1);
    }

    lastChar = text[i];
  }

  return text;
}

function traverseSidebarItem(node: SidebarItem, depth: number) {
  if (node.items && node.items.length > 0) {
    if (node.text)
      node.text = capitalizeEachWord(node.text);

    node.items.forEach((n) => traverseSidebarItem(n, depth + 1));
  }
}

function traverseSidebar(sidebar: Sidebar) {
  if (Array.isArray(sidebar)) {
    sidebar.forEach(i => traverseSidebarItem(i, 0));
  }
}

traverseSidebar(sidebar);

// https://vitepress.dev/reference/site-config
export default defineConfig({
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

    sidebar: sidebar,

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
});
