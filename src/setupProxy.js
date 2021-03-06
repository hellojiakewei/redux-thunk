const proxy = require('http-proxy-middleware')
;
module.exports = function(app) {
  app.use(
    proxy("/api/**", {
      target: "http://192.168.5.105:4000",//跨域地址
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      },
    })
  );
};
