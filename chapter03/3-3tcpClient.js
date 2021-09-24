var net = require("net");
var client = new net.Socket();
client.setEncoding("utf8");

client.connect("8124", "localhost", function () {
  console.log("connected to server");
  client.write("start communication");
});

process.stdin.resume();

process.stdin.on("data", function (data) {
  client.write(data);
});

client.on("data", function (data) {
  console.log(data);
});

client.on("close", function () {
  console.log("client disconnected");
});
