const http = require('http');
const port = 8080;
const home = require('../handlers/router');

http.createServer(home.homeHandler).listen(port, function () {
    console.log(`Server active at port: ${port}`)
})

