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
