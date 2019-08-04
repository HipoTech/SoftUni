const eventController = function () {

    const getAddFormTemplate = function (ctx) {

        ctx.loggedIn = storage.getData('token') !== null;
        ctx.username = storage.getData('username');

        ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
            .then(function () {
                if (ctx.loggedIn) {
                    this.partial('./views/eventTemplates/organizeEventForm.hbs');
                }
            })
    }

    const createData = function (ctx) {

        const product = document.querySelector('#product').value;
        const price = document.querySelector('#price').value;
        const description = document.querySelector('#description').value;
        const pictureUrl = document.querySelector('#pictureUrl').value;

        const productCheck = product.length > 0;
        const priceCheck = price.length > 0;
        const descriptionCheck = description.length > 0;
        const pictureUrlCheck = /^https?:\/\/.+/g.test(pictureUrl);

        if (productCheck && priceCheck && descriptionCheck && pictureUrlCheck) {
            const body = {
                'product': ctx.params.product,
                'description': ctx.params.description,
                'price': ctx.params.price,
                'pictureUrl': ctx.params.pictureUrl,
                'organizer': storage.getData('username'),
            }

            requester.post('examp', 'appdata', 'Kinvey', body)
                .then(() => ctx.redirect('#/dashboard'));
        } else {
            console.log('has empty field');
        }

    }

    const postEdit = function (ctx) {

        requester.get(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse)
            .then(() => {

                const product = document.querySelector('#product').value;
                const price = document.querySelector('#price').value;
                const description = document.querySelector('#description').value;
                const pictureUrl = document.querySelector('#pictureUrl').value;

                const productCheck = product.length > 0;
                const priceCheck = price.length > 0;
                const descriptionCheck = description.length > 0;
                const pictureUrlCheck = /^https?:\/\/.+/g.test(pictureUrl);

                if (productCheck && priceCheck && descriptionCheck && pictureUrlCheck) {
                    const body = {
                        'product': ctx.params.product,
                        'description': ctx.params.description,
                        'price': ctx.params.price,
                        'pictureUrl': ctx.params.pictureUrl,
                        'organizer': storage.getData('username'),
                    }


                    requester.put(`examp/${ctx.params.id}`, 'appdata', 'Kinvey', body)
                        .then(serverResponse => handler.checkServerResponse(serverResponse))
                        .then(() => ctx.redirect(`#/dashboard`))
                } else {
                    console.log('has empty field');
                }
            })


    }

    const getAll = function (ctx) {
        requester.get('examp', 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');
                ctx.organizerCheck = ctx.username === ctx.examp.organizer;
                ctx.examp.forEach(prod => {
                    prod.isMy= ctx.username === prod.organizer
                });
                
                ctx.noOffers = false;
                if (ctx.examp.length === 0) {
                    ctx.noOffers = true
                }

                ctx.loadPartials({
                        header: './views/common/header.hbs',
                        footer: './views/common/footer.hbs',
                    }).then(function () {
                        this.partial('./views/eventTemplates/cinema.hbs');
                    })
            })

    }

    const getMy = function (ctx) {
        requester.get('examp', 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse.filter(x => x.organizer === storage.getData('username')))
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');

                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                }).then(function () {
                    this.partial('./views/eventTemplates/my-movies.hbs');
                })
            })
    }

    const getCurrent = function (ctx) {
        requester.get(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');
                ctx.organizerCheck = ctx.username === ctx.examp.organizer;

                ctx.loadPartials({
                        header: './views/common/header.hbs',
                        footer: './views/common/footer.hbs'
                    })
                    .then(function () {
                        if (ctx.loggedIn) {
                            this.partial('./views/eventTemplates/event-details.hbs');
                        }
                    })
            })



    }

    const getEditTemplate = function (ctx) {

        requester.get(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');

                ctx.loadPartials({
                        header: './views/common/header.hbs',
                        footer: './views/common/footer.hbs'
                    })
                    .then(function () {
                        if (ctx.loggedIn) {
                            this.partial('./views/eventTemplates/event-edit.hbs');
                        }
                    })
            })
    }

    const getDeleteTemplate = function (ctx) {

        requester.get(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');

                ctx.loadPartials({
                        header: './views/common/header.hbs',
                        footer: './views/common/footer.hbs'
                    })
                    .then(function () {
                        if (ctx.loggedIn) {
                            this.partial('./views/eventTemplates/delete-movie.hbs');
                        }
                    })
            })
    }

    const deleteElement = function (ctx) {

        requester.del(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(() => ctx.redirect('#/dashboard'))
    }

    const bye = function (ctx) {

        requester.get(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse)
            .then(() => {
                if (ctx.examp.availableTickets > 0) {
                    ctx.examp.availableTickets -= 1;
                    body = ctx.examp;
                    requester.put(`examp/${ctx.params.id}`, 'appdata', 'Kinvey', body)
                        .then(serverResponse => handler.checkServerResponse(serverResponse))
                        .then(() => ctx.redirect(`#/cinema`))
                }
            })
    }

    return {
        getAddFormTemplate,
        createData,
        getAll,
        getCurrent,
        getEditTemplate,
        postEdit,
        deleteElement,
        bye,
        getMy,
        getDeleteTemplate,

    }
}();