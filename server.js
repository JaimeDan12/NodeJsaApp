//  import htpp 
const http = require('http');
const routes = require ('./routes');

// create server
const server = http.createServer(routes); 

server.listen(3005)