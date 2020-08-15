const WebpackAliyunOss = require('webpack-aliyun-oss');

module.exports = {
  title: '',
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1', // 必要的
        path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      },
      {
        title: '888',
        path: 'guide/',
      },
    ],
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
        }
      })
    ],
  },
};
