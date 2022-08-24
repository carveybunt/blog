module.exports = [
  [
    // 一键复制
    'one-click-copy',
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ],
      copyMessage: '复制成功',
      toolTipMessage: '意见复制',
      duration: 1250
    }
  ],
  [
    // 图片放大
    'zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)',
      options: {
        bgColor: 'rgba(0,0,0,0.6)'
      }
    }
  ],
  [
    // 『上次更新』插件配置
    '@vuepress/last-updated',
    {
      // 时间显示格式
      transformer: (timestamp, _lang) => {
        const dayjs = require('dayjs')
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      }
    }
  ],
  [
    // 站点地图
    'sitemap',
    {
      hostname: 'https://dragon1573.github.io/Plotly4py-Intro/',
      exclude: ['/404.html']
    }
  ],
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: '3e227d47eb4c69f4fa7f',
        clientSecret: '7c0b4f7e91593353066c295844be819f4ba5d6b1',
        repo: 'blog-gitalk-comment', // GitHub 仓库
        owner: 'carveybunt', // GitHub仓库所有者
        admin: ['carveybunt'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  // 鼠标点击特效 星星
  [
    'cursor-effects',
    {
       size: 2, // size of the particle, default: 2
      //  shape: ['star' | 'circle'], // shape of the particle, default: 'star'
       zIndex: 999, // z-index property of the canvas, default: 999999999
    },
  ],
  // 花瓣背景 
  ["sakura", {
    num: 20,  // 默认数量
    show: true, //  是否显示
    zIndex: -1,   // 层级
    // img: {
    //   replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
    //   httpUrl: '...'     // 绝对路径
    // }     
  }]
]
