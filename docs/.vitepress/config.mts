import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "十年磨一剑",
  description: "hello world",
  vite:{
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'vue组件', link: '/' },
      { text: 'vue源码学习', link: '/markdown-examples' },
      { text: 'react源码学习', link: '/markdown-examples' },
			{ text: 'nodejs', link: '/markdown-examples' },
			{ text: '前端学习', link: '/markdown-examples' },
			{ text: '前端架构', link: '/markdown-examples' },
			{ text: '算法', link: '/markdown-examples' },
			// { text: 'Java学习', link: '/markdown-examples' },
			// { text: 'Java架构', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '元组件',
        items: [
          { text: 'button', link: '/components/button' },
          { text: 'icon', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
