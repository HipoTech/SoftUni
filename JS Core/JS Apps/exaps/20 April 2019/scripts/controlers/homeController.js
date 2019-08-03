const homeController = function () {

    const getHomeTemplate = function (ctx) {
        ctx.loggedIn = storage.getData('token') !== null;
        if (ctx.loggedIn) {
            eventController.getAll(ctx)
        }else{
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs',
            }).then(function () {
                this.partial('./views/home/guestHome.hbs');
            })
        }
        
    }
    return {
        getHomeTemplate,

    }
}();