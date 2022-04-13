const nav = require('./nav.js');
const htmlModules = require('./htmlModules.js');

// 主题配置
module.exports = {
  logo: '/@32px.svg',
  nav,
  sidebarDepth: 4,
  repo: 'carveybunt/blog',
  searchMaxSuggestions: 10,
  lastUpdated: '上次更新',
  docsDir: 'docs',
  editLinks: false,

  /* 开始：Vdoing 主题相关配置 */
  // category: false,
  // tag: false,
  // archive: false,
  updateBar: {
    showToArticle: false
  },
  rightMenuBar: true,
  sidebarOpen: true,
  pageButton: true,
  sidebar: {
    mode: 'structuring',  // WARNING：强制设置，不可更改！
    collapsable: true
  },
  author: {
    name: '诚城',
    link: 'https://github.com/carveybunt',
  },
  titleTag: '原创',
  // 博主信息，显示在首页侧边栏
  blogger: {
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0731%252F64bb6639j00qx3w4x000oc000hs00cnm.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643616351&t=33b58d27e3832fcddf2e38493a30217f',
    name: '诚城',
    slogan: '我有N个梦想……',
  },
  social: {
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/carveybunt',
      },
      {
        iconClass: 'icon-bilibili',
        title: 'B站',
        link: 'https://space.bilibili.com/347040371'
      },
      {
        iconClass: 'icon-youtube',
        title: 'YouTube',
        link: 'https://www.youtube.com/channel/UC_bQYWRoy1hluw4Lm8dOlNg'
      },
      {
        iconClass: 'icon-erji',
        title: '网易云音乐',
        link: 'https://music.163.com/#/user/home?id=127315922'
      }
    ]
  },
  footer: {
    createYear: 2022,
    copyrightInfo:
      'carveybunt | <a href="https://github.com/carveybunt/blog/blob/master/LICENSE">MIT License</a>',
  },
  // 插入html(广告)模块
  htmlModules
}
