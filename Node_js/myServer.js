import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>hellow</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// let a ;
// export default  a = "hey";
// export const b = 77;