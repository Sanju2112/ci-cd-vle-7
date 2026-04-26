const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from CI/CD using Jenkins");
  res.end();
}).listen(3000);
