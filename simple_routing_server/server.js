
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
   else {
    res.statusCode = 404;
    res.end("404 Page Not Found");
  }

});

server.listen(3000);
