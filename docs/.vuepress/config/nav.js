// nav
module.exports = [
  { text: "首页", link: "/" },
  {
    text: "考研",
    link: "/postgraduate/",
    items: [
      { text: "高数基础", link: "/math/base/index_logarithm/" },
      {
        text: "数一",
        link: "/postgraduate/math/",
        items: [
          {
            text: "高等数学",
            link: "/postgraduate/math/higher-mathematics/",
          },
          { text: "线性代数", link: "/postgraduate/math/linear-algebra/" },
          { text: "概率论与数理统计", link: "/postgraduate/math/probability-theory/" },
        ],
      },
      {
        text: "820",
        link: "/postgraduate/820/",
        items: [
          { text: "C语言", link: "/postgraduate/820/c/" },
          { text: "数据结构", link: "/postgraduate/820/data-struct/" },
          { text: "计算机操作系统", link: "/postgraduate/820/os/" },
        ],
      },
      {
        text: "英一",
        link: "/postgraduate/english/guide/",
        items: [
          { text: "单词", link: "/postgraduate/english/words/dis/" },
          { text: "语法", link: "/postgraduate/english/grammar/" },
          { text: "长难句", link: "/postgraduate/english/Sentence/" },
          { text: "作文", link: "/postgraduate/english/composition/" }
        ],
      },
      {
        text: "政治",
        link: "/postgraduate/politics/",
        items: [
          { text: "马克思主义", link: "/postgraduate/politics/marxs/" },
          { text: "毛泽东", link: "/postgraduate/politics/mao/" },
          { text: "近代史", link: "/postgraduate/politics/histroy/" },
          { text: "思修", link: "/postgraduate/politics/mind/" },
          { text: "时事", link: "/postgraduate/politics/event/" },
        ],
      },
    ],
  },
  {
    text: "前端",
    link: "/frontend/",
    items: [
      { text: "UI", link: "/frontend/ui/",items: [
        { text: "Tailwind Css", link: "/frontend/ui/tailwind-css/" },
        { text: "Element-Plus", link: "/frontend/ui/element-plus/" },
        { text: "color UI", link: "/frontend/ui/color-ui/" },
        { text: "html5", link: "/frontend/ui/html5/" },
        { text: "css3", link: "/frontend/ui/css3/" },
      ]},
      { text: "框架", link: "/frontend/frame/",items: [
        { text: "Vue3", link: "/frontend/frame/vue3/" },
        { text: "Vue2", link: "/frontend/frame/vue2/" },
      ]},
      { text: "拓展包",items: [
        { text: "包管理工具", link: "/frontend/package/tool/" },
        { text: "包开发", link: "/frontend/package/development/" },
      ]},
    ],
  },
  {
    text: "后端",
    link: "/backend/",
    items: [
      { text: "开发语言", link: "/backend/languauge/",items: [
        { text: "C语言", link: "/postgraduate/820/c/" },
        { text: "PHP", link: "/backend/languauge/PHP/" },
        { text: "Phyton", link: "/backend/languauge/phyton/" },
      ]},
      { text: "框架", link: "/backend/frame/",items: [
        { text: "Laravel", link: "/backend/frame/laravel/" },
      ]},
    ],
  },

  {
    text: "拓展技能",
    link: "/powers/",
    items: [
        { text: "会计", link: "/powers/accountant/",items: [
          // { text: "注会", link: "/powers/accountant/cpa" },
          { text: "初级经济法基础", link: "/powers/accountant/junior/economic/" },
          { text: "初级会计实务", link: "/powers/accountant/junior/practice/" },
          // { text: "中级会计", link: "/powers/accountant/Intermediate" },
        ]},
        { text: "软考", link: "/computer-software-exam/",items: [
          { text: "信息系统项目管理师", link: "/computer-software-exam/project/hight/" },
        ]},
    ],
  },
  {
    text: "工具",
    link: "/tools/",
    items: [
      { text: "git", link: "/tools/git/" },
      { text: "vsCode", link: "/tools/vscode/" },
      { text: "Jetbrains", link: "/tools/jetbrains/",items: [
        { text: "phpstorm", link: "/tools/jetbrains/phpstorm/" },
        { text: "clion", link: "/tools/jetbrains/clion/" },
      ]},
      { text: "latex", link: "/tools/latex/setting/" },
    ],
  },
];
