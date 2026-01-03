
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

  let filePath;

  if (req.url === "/") {
    filePath = path.join(__dirname, "pages", "home.html");
    res.statusCode = 200;
  } 
  else if (req.url === "/about") {
    filePath = path.join(__dirname, "pages", "about.html");
    res.statusCode = 200;
  } 
  else if (req.url === "/login") {
    filePath = path.join(__dirname, "pages", "login.html");
    res.statusCode = 200;
  } 
  else {
    filePath = path.join(__dirname, "pages", "404.html");
    res.statusCode = 404;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(res.statusCode, { "Content-Type": "text/html" });
      res.end(data);
    }
  });

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
