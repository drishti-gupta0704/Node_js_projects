
const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/data" && req.method === "GET") {

    const data = {
      name: "Drishti",
      role: "Student"
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(data));
  }
   
  else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });
    res.end("Route not found");
  }

  
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});