const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request served!!');
    // to end the server use following..
    // process.exit()
});

server.listen(5000);