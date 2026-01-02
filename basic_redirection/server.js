

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

   
    res.writeHead(200, {"Content-Type":"text/plain" });
     res.end("hello welcome to homepage");
    
    }


  else if (req.url === "/login") {


    res.writeHead(302, {
      Location: "/dashboard"
    });

    res.end();
  }


  else if (req.url === "/dashboard") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Dashboard");
  }



});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

