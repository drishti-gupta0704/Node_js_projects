
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

  if (req.url === "/style.css") {
    const filePath = path.join(__dirname, "public", "style.css");
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(data);
  }

  else if (req.url === "/script.js") {
    const filePath = path.join(__dirname, "public", "script.js");
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(data);
  }

  else if (req.url === "/") {
    const filePath = path.join(__dirname, "pages", "index.html");
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  }
  // 404 fallback handling 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }

});

// server.listen(3000);
const PORT = process.env.PORT || 3000;  // Render provides PORT automatically

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

