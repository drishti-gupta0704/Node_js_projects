const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  res.end("Hello from Node.js");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
