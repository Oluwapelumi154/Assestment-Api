const http = require('http');
const dotenv = require('dotenv');
const { db } = require('./src/config');

dotenv.config({ path: './.env' });

const app = require('./src/app');

const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT, () => {
  db.sequelize.sync({ force: true }).then(() => {
    console.log(`Application running on port ${PORT}`);
  });
});
