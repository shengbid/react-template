// const proxy = require("http-proxy-middleware")
// 旧版本写法
// module.exports = function (app) {
//   app.use(
//     proxy("/api1", {
//       target: "http://localhost:5000",
//       // changeOrigin: true,
//       pathRewrite: { "^/api1": "" },
//     })
//   )
// }
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      pathRewrite: { "^/api1": "" },
      changeOrigin: true, // 控制服务器请求头中的host信息
    })
  )
}
