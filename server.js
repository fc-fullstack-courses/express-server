const https = require('https');
const app = require('./app');

const server = https.createServer(app);

const PORT = 5000;

server.listen(PORT);
