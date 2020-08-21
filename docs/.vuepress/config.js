module.exports = {
  title: '杨越Yul',
  description: '大前端',
  themeConfig: {
    logo: '/logo-108.png',
    nav: require('./nav/zh'),
    sidebar: {
      '/web/': getWebSidebar(),
      // '/node/': getPluginSidebar(),
      // '/android/': getThemeSidebar(),
      // '/algorithm/': getThemeSidebar(),
      // '/datastructure/': getThemeSidebar(),

      // '/flutter/': getThemeSidebar(),
    },
    repo: 'https://github.com/yangyueyul/blog',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页面',
  },
  smoothScroll: true,
  head: [
    ['script',{},`
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
    `]
  ]
};

function getWebSidebar() {
  return [
    {
      title: 'JavaScript',
      collapsable: false,
      children: ['', 'javascript/base', 'javascript/modules'],
    },
    {
      collapsable: false,
      title: 'CSS',
      children: ['css/base'],
    },
    {
      title: 'HTML',
      collapsable: false,
      children: ['html/base'],
    },
  ];
}
