const http = require('http');
const app = require('./app');
// dire à l'app express sur quel port elle va tourner 
app.set('port', process.env.PORT || 8888);
const server = http.createServer(app);

server.listen(process.env.PORT || 8888);