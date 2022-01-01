const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing',

  base: '/',
  dest: 'dist',
  locales: {
    '/': {
      title: "诚城的成长",
      description: '个人学习记录',
      lang: 'zh-CN'
    }
  },

  head,
  plugins,
  themeConfig,

  markdown: {
    lineNumber: false
  },
  extendMarkdown: md => {
    md.set({ breaks: true });
    md.use(require('markdown-it-mathjax3'));
    // md.use(require('markdown-it-footnote'));
  }
}
