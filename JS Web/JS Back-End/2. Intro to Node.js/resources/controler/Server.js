const http = require('http');
const url = require('url');
const port = 8080;

const app = http.createServer((req, res) => {
    res.write('Hi!');
    res.end();
});
app.listen(port, function () {
    console.log(`Server active on port: ${port} !`);
});

