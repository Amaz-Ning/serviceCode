const http = require('http')
const urlLib = require('url')
const userInfo = {}
http.createServer((req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*')
    const json = urlLib.parse(req.url, true).query
    console.log(json)
    resp.end('123')
}).listen(9000)
