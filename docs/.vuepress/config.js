module.exports = {
  title: 'yangyueyul',
  description: '大前端',
  themeConfig: {
    logo: '/favicon.ico',
    nav: require('./nav/zh'),
    sidebar: {
      '/web/': getWebSidebar(),
      // '/node/': getPluginSidebar(),

      // '/android/': getThemeSidebar(),
      // '/algorithm/': getThemeSidebar(),
      // '/datastructure/': getThemeSidebar(),

      // '/flutter/': getThemeSidebar(),
    },
  },
  smoothScroll: true,
};

function getWebSidebar() {
  return [
    {
      title: 'JavaScript',
      children: ['javascript/base', 'javascript/modules'],
      sidebarDepth: 1,
    },
    {
      title: 'CSS',
      children: ['css/base'],
    },
    {
      title: 'HTML',
      children: ['html/base'],
    },
  ];
}

function getApiSidebar() {
  return ['cli', 'node'];
}
