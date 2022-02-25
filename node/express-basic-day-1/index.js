



const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((request, response) =>{
  const data = [
      { name: "Usman",  age: 26 },
      { name: "Gani", age: 25 },
  ];
  response.write(JSON.stringify(data));
  response.end();
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});