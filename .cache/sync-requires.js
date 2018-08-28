// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/src/templates/blog-post.js")),
  "component---src-pages-generic-js": preferDefault(require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/hello-world.json"),
  "my-second-post.json": require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/my-second-post.json"),
  "hi-folks.json": require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/hi-folks.json"),
  "generic.json": require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/generic.json"),
  "index.json": require("/home/gustavo/github/boosttecnologia/boosttecnologia.github.io/.cache/json/index.json")
}