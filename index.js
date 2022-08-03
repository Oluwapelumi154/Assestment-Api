const http = require('http');
const { database } = require('./src/config');
const app = require('./src/app');
/**
 * Normalize a port into a number, string or false
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};
const server = http.createServer(app);
const PORT = normalizePort(process.env.PORT) || 8000;

server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${PORT}`;
  const log = '[?] Connecting ...';
  console.log(`listening on ${bind}`);
  console.log(log);
  database.sequelize.sync().then(() => {
    console.log(`Successfully Established Connection to the Database`);
  });
});
server.listen(PORT);
