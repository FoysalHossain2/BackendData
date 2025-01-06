const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // db.json ফাইলটি একই ফোল্ডারে থাকতে হবে
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // সার্ভার 3000 পোর্টে চলবে
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});