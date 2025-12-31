
const http = require("http");

const server = http.createServer((req, res) => {

  const fullUrl = new URL(req.url, `http://${req.headers.host}`);

  for (const [key, value] of fullUrl.searchParams) {
    console.log(`${key} → ${value}`);
  }

  res.end("Query params read");
});

server.listen(3000);