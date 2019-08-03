const homeController = function () {

    const getHomeTemplate = function (ctx) {

        ctx.loggedIn = storage.getData('token') !== null;
        ctx.username = storage.getData('username');


        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        })
            .then(function () {
                this.partial('./views/home/home.hbs');
            })

    }

    return {
        getHomeTemplate,

    }
}();