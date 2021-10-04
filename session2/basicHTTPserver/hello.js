const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.end('Hello World!');
});
server.listen(8000);