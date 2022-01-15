const web = require('./category/web')

module.exports = {
  title: '杨越Yul',
  description: '大前端',
  themeConfig: {
    logo: '/logo-108.png',
    nav: require('./nav/zh'),
    sidebar: {
      '/web/': web,
      // '/node/': getPluginSidebar(),
      // '/android/': getThemeSidebar(),
      // '/algorithm/': getThemeSidebar(),
      // '/datastructure/': getThemeSidebar(),

      // '/flutter/': getThemeSidebar(),
    },
    repo: 'yangyueyul/blog',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页面',
  },
  smoothScroll: true,
  head: [
    [
      'script',
      {},
      `
       setTimeout(() => {
        var a = document.createElement('a');
        a.setAttribute('href', "https://beian.miit.gov.cn/");
        a.innerText = "京ICP备19006890号-1";
        a.setAttribute("class", "icp");
        document.body.appendChild(a);
        console.log('12321321')
      }, 100);

        var _mtac = {"senseQuery":1};
        (function() {
          var mta = document.createElement("script");
          mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
          mta.setAttribute("name", "MTAH5");
          mta.setAttribute("sid", "500727815");
          mta.setAttribute("cid", "500727816");
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(mta, s);
        })();
    `,
    ],
  ],
};
