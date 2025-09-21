import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "lyl's Notes",
  description: "lyl的个人笔记网站，记录学习与思考",
  base: "/",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ["blackCat"],
        clean: false,
        info: 'https://github.com/lyl-888',
        messages: {
          welcome: '',
          home: '心里的花，我想要带你回家',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    [
      'dynamic-title',
      {
        showIcon: '/logo.png',
        showText: '欢迎回来！',
        hideIcon: '/logo.png',
        hideText: '祝一路顺风！',
        recoverTime: 2000,
      },
    ],
  ] as any,
  theme: recoTheme({
    logo: "/logo.png",
    author: "lyl",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/lyl-888/lyl-888.github.io",
    docsBranch: "main",
    docsDir: "docs",
    lastUpdatedText: "最后更新时间",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "VuePress主题",
          children: ["home", "theme", "api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "时间线", link: "/timeline/" },
      { text: "关于我", link: "/about" },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `📚 欢迎来到 lyl 的个人笔记网站！这里记录了我的学习心得、技术总结和生活感悟。希望这些笔记能对大家有所帮助，也欢迎交流讨论。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "联系方式",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>邮箱：liyuliang040612@163.com</li>
            <li>GitHub：@lyl-888</li>
            <li>微信：liduoduo8</li>
            <li>手机：13359842933</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "项目链接",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/lyl-888/lyl-888.github.io">笔记源码<a/></li>
            <li><a href="https://lyl-888.github.io">在线预览<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
