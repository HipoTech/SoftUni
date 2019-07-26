const handlers = {};
handlers.getHome = function (ctx) {
    ctx.partial('../../templates/home.hbs');
}