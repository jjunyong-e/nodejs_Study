var http = require('http');
var options = {
  host : 'localhost',
  port : 8124,
  path : '/?file=secondary',
  method : 'GET'
};

var processPublicTileline = function(res){
  console.log('finished request');
}

for (var i = 0;i<2000;i++){
  http.request(options,processPublicTileline).end();
  console.log(i)
}