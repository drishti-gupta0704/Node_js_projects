

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

 
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "pages", "index.html");
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  }


  else if (req.method === "POST" && req.url === "/login") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

   
    req.on("end", () => {
      console.log(body);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Login data received");
    });

  }

 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }

});

server.listen(3000);
