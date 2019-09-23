const url = require('url');
const handler = require('./handler');


module.exports = {
    homeHandler: function (req, res) {
        const path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                handler.renderHtml('./views/home/index.html', res);
                break;
            case '/home':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                handler.renderHtml('./views/home/index.html', res);
                break;
            case '/addBreed':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                handler.renderHtml('./views/addBreed.html', res);
                break;
            case '/addCat':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                handler.renderHtml('./views/addCat.html', res);
                break;
            case '/catShelter':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                handler.renderHtml('./views/catShelter.html', res);
                break;
            case '/editCat':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                handler.renderHtml('./views/editCat.html', res);
                break;
            case '/content/styles/site.css':
                res.writeHead(200, { 'Content-Type': 'text/css' });
                handler.renderHtml('./content/styles/site.css', res);
                break;

            default:
                res.writeHead('404');
                res.write('404');
                res.end();
                break;
        }
    }
}