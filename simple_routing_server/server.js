
const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.end("Welcome to Home Page");
  } 
  else if (req.url === "/about") {
    res.end("This is About Page");
  } 
  else if (req.url === "/login") {
    res.end("Login Page");
  } 
 
});

server.listen(3000);
