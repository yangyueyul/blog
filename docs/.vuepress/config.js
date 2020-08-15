const WebpackAliyunOss = require('webpack-aliyun-oss');

module.exports = {
  title: 'yangyueyul',
  description: '大前端',
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '引导', link: '/pages/guild/' },
      {
        text: '分类',
        ariaLabel: '分类',
        items: [
          { text: '文章', link: '/pages/xx/t1.md' },
          { text: '文字', link: '/pages/xx/t2.md' },
        ],
      },
      { text: 'Github', link: 'https://github.com/yangyueyul' },
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
  },
  configureWebpack: {
    plugins: [
      new WebpackAliyunOss({
        dist: `/`,
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAI4GCwPqZBiZgi7YNm2kX6',
        accessKeySecret: 'rxtSDFFtiX9Wvof1VhCooas9OCXVqP',
        bucket: 'blog-yangyueyul',
        setOssPath(filePath) {
          filePath = filePath.replace(__dirname, '');
          return filePath;
        },
      }),
    ],
  },
};
