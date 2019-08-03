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
            'meal': ctx.params.meal,
            'ingredients': [...(ctx.params.ingredients).split(', ').map(e => ({
                ingrediant: e
            }))],
            'prepMethod': ctx.params.prepMethod,
            'description': ctx.params.description,
            'foodImageURL': ctx.params.foodImageURL,
            'category': ctx.params.category,
            'likes': 0,
            'organizer': storage.getData('username'),
        }


        requester.post('recepies', 'appdata', 'Kinvey', body)
            .then(() => ctx.redirect('#/home'));
    }

    const getAll = function (ctx) {
        requester.get('recepies', 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.recepies = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');

                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                }).then(function () {
                    if (ctx.recepies.length !== 0) {
                        this.partial('./views/home/home.hbs');
                    } else {
                        this.partial('./views/home/foodNotFound.hbs');
                    }

                })
            })
    }

    const getMy = function (ctx) {
        requester.get('recepies', 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.recepies = serverResponse.filter(x => x.organizer === storage.getData('username')))
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
        requester.get(`recepies/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.recepies = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');
                ctx.organizerCheck = ctx.username === ctx.recepies.organizer;
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

        requester.get(`recepies/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.recepies = serverResponse)
            .then(() => {
                let ingr = ''
                ctx.recepies.ingredients.forEach(element => {
                    ingr += element['ingrediant'];
                    ingr += ', '
                });
                ctx.recepies.ingredients = ingr.slice(0, ingr.length - 2);
            })
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

        requester.get(`recepies/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.event = serverResponse)
            .then(() => {

                const body = {
                    'meal': ctx.params.meal,
                    'ingredients': [...(ctx.params.ingredients).split(', ').map(e => ({
                        ingrediant: e
                    }))],
                    'prepMethod': ctx.params.prepMethod,
                    'description': ctx.params.description,
                    'foodImageURL': ctx.params.foodImageURL,
                    'category': ctx.params.category,
                    'likes': 0,
                    'organizer': storage.getData('username'),
                }

                requester.put(`recepies/${ctx.params.id}`, 'appdata', 'Kinvey', body)
                    .then(serverResponse => handler.checkServerResponse(serverResponse))
                    .then(() => ctx.redirect(`#/home`))
            })

    }

    const deleteElement = function (ctx) {

        requester.del(`recepies/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(() => ctx.redirect('#/home'))
    }

    const bye = function (ctx) {

        requester.get(`recepies/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.recepies = serverResponse)
            .then(() => {
                if (ctx.recepies.availableTickets > 0) {
                    ctx.recepies.availableTickets -= 1;
                    body = ctx.recepies;
                    requester.put(`recepies/${ctx.params.id}`, 'appdata', 'Kinvey', body)
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