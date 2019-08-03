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
        const body = {
            'title': ctx.params.title,
            'description': ctx.params.description,
            'image': ctx.params.imageUrl,
            'availableTickets': ctx.params.tickets,
            'genres': ctx.params.genres,
            'organizer': storage.getData('username'),
        }

        requester.post('examp', 'appdata', 'Kinvey', body)
            .then(() => ctx.redirect('#/home'));
    }

    const getAll = function (ctx) {
        requester.get('examp', 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.examp = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');

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

    const postEdit = function (ctx) {

        requester.get(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.event = serverResponse)
            .then(() => {

                const body = {
                    'title': ctx.params.title,
                    'description': ctx.params.description,
                    'image': ctx.params.imageUrl,
                    'availableTickets': ctx.params.tickets,
                    'genres': ctx.params.genres,
                    'organizer': storage.getData('username'),
                }

                requester.put(`examp/${ctx.params.id}`, 'appdata', 'Kinvey', body)
                    .then(serverResponse => handler.checkServerResponse(serverResponse))
                    .then(() => ctx.redirect(`#/myMovies`))
            })

    }

    const deleteElement = function (ctx) {

        requester.del(`examp/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(() => ctx.redirect('#/myMovies'))
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

    }
}();