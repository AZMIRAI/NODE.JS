var http = require('http');
var dt = require('./myfirstmodule')

http.createServer(function (req, res) {
  res.writeHead(200, {
'Content-Type': 'text/html;charset=utf8',
'MyName':'hwangdaeyoung'
});
  res.end('Hello World! : '+dt.myDateTime());
}).listen(8080);