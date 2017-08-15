const b = require("browserify")
const { createReadStream } = require("fs")
const { createServer } = require("http")

createServer(({ url }, res) =>
    url === "/favicon.ico" ? res.end() :
    url === "/main.css" ? createReadStream(`${__dirname}/main.css`).pipe(res) :
    url === "/bundle.js" ? b(`${__dirname}/index.js`)
      .transform("babelify", {
          presets: ["react", "latest"],
          plugins: [
              ["transform-react-jsx", { "pragma": "h" }]
          ]
      })
      .bundle().on("error", e => {
          console.error(e)
          res.writeHead(500, e.toString())
          res.end()
      }).pipe(res): createReadStream(`${__dirname}/index.html`).pipe(res)
).listen(8080)
