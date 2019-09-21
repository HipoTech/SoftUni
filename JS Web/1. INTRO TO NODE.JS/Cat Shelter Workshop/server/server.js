const http = require('http');
const port = 8080;

const app = http.createServer(function (req,res) {
    res.write('Hi!');
    res.end();
})

app.listen(port, function () {
    console.log(`Server active at port: ${port}`)
})