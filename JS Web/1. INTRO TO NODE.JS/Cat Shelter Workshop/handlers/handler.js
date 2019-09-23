const fs = require('fs');

const renderHtml = function (path, res) {
    fs.readFile(path, null, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
            res.write(`${path}`);
        } else {
            res.write(data);
        }
        res.end();
    });
};

module.exports = {
    renderHtml,
}