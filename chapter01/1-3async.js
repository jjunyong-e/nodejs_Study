var http = require('http');
var fs = require('fs');


function writeNumber(res){
  var counter = 0;
  for (var i=0; i<100;i++){
    counter++;
    console.log(counter);
    res.write(counter.toString() + '\n');
  }
}

http.createServer((req, res) => {
  var query = require('url').parse(req.url).query;
  var app = require('querystring').parse(query).file + '.txt';

  res.writeHead(200, {'Content-Type': 'text/plain'});
  writeNumber(res);
  console.log(res)
  setTimeout(function(){
    console.log('opening ' + app);
    fs.readFile(app, 'utf8', (err,data) => {
      if(err){
        console.log('Could not open ' + app);
      } else{
        res.write(data);
      }
      res.end();
    });
  },2000);
}).listen(8124);

console.log('server listening on 8124\n')