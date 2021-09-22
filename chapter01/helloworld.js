var http = require('http');
http.createServer((req, res) =>  {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('hello, world!');
  res.end();

}).listen(8124);

console.log('server listening on port 8124');