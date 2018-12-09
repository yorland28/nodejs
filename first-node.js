const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('<h1>Hello World<h1>');
});

server.listen('8081', '127.0.0.1', () => {
console.log('Server running at http://127.0.0.1:8081/');
});

