const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("Index.html", function (err, dataFromFile) {
    if (!err) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(dataFromFile);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
