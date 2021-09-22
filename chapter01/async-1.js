var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('helloworld.js','utf-8',(err, data) => {
    res.writeHead(200,{'content-type': 'text/plain'});
    if(err){
      res.write('could not read or open file\n');
    } else{
      res.write(data);
    }
    res.end();
  });
}).listen(8124,function () {
  console.log('bound to port 8124\n');
});
console.log('server running on 8124\n')