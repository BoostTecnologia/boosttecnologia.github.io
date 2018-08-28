// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/src/templates/blog-post.js"),
  "component---src-pages-generic-js": require("gatsby-module-loader?name=component---src-pages-generic-js!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/src/pages/generic.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/hello-world.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/my-second-post.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/hi-folks.json"),
  "generic.json": require("gatsby-module-loader?name=path---generic!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/generic.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/layouts/index.js")
}