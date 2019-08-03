const homeController = function () {

    const getHomeTemplate = function (ctx) {

        ctx.loggedIn = storage.getData('token') !== null;
        ctx.username = storage.getData('username');
        // handler.addHeaderInfo(ctx);
        handler.loadPartials(ctx)
            // ctx.loadPartials({
            //     header: './views/common/header.hbs',
            //     footer: './views/common/footer.hbs'
            // })
            .then(function () {
                eventController.getAllEvents(ctx);
            })
            .then(function () {
                if (ctx.loggedIn) {
                    eventController.getAllEvents()
                        .then(serverResponse => handler.checkServerResponse(serverResponse))
                        .then(serverResponse => ctx.events = serverResponse)
                        .then(() => {
                            if (ctx.events.length !== 0) {
                                this.partial('./views/home/logedInHome.hbs');
                            } else {
                                this.partial('./views/notFound/notFound.hbs');
                            }

                        })
                } else {
                    this.partial('./views/home/home.hbs');
                }
            })
    }

    return {
        getHomeTemplate,

    }
}();