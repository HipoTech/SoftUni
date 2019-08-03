const userController = function () {

    const getRegisterTemplate = function (ctx) {
        ctx.loggedIn = storage.getData('token') !== null;

        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        })
            .then(function () {
                this.partial('./views/user/registerPage.hbs');
            })
    };

    const getLoginTemplate = function (ctx) {
        ctx.loggedIn = storage.getData('token') !== null;
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        })
            .then(function () {
                this.partial('./views/user/loginPage.hbs');
            })

    };

    const createUser = function (ctx) {
        const body = {
            username: ctx.params.username,
            password: ctx.params.password,
        };

        requester.post('', 'user', 'Basic', body)
            .then((response) => handler.checkServerResponse(response))
            .then(loginResponse => {
                storage.saveData('token', loginResponse._kmd.authtoken);
                storage.saveData('username', loginResponse.username);
            })
            .then(() => ctx.redirect('#/home'))
            .catch(error => console.log(`Error detected: ${error}`));
    };

    const loginUser = function (ctx) {
        const body = {
            username: ctx.params.username,
            password: ctx.params.password,
        };

        requester.post('login', 'user', 'Basic', body)
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(loginResponse => {
                storage.saveData('token', loginResponse._kmd.authtoken);
                storage.saveData('username', loginResponse.username);
            })
            .then(() => ctx.redirect('#/home'))
            .catch(response => console.log(response));

    };

    const logoutUser = function (ctx) {
        requester.post('_logout', 'user', 'Kinvey')
            .then(() => storage.deleteUser())
            .then(() => ctx.redirect('#/home'))
            .catch((error) => console.log(`Server error detected: ${error}`))
    };

    const getUserInfo = function (ctx) {
        const eventHeaders = {
            headers: {},
        };

        const loginUrl = storage.baseUrl + '/appdata/' + storage.appKey + '/events';

        requester.get(loginUrl, eventHeaders)
            .then((serverResponse => handler.checkServerResponse(serverResponse)))
            .then((serverResponse) => {
                ctx.event = serverResponse
            })
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');
                ctx.userEvents = ctx.event.filter(x => x.organizer === ctx.username);
                ctx.countUserEvents = this.userEvents.length;
                ctx.loadPartials({
                    header: '../../views/common/header.hbs',
                    footer: '../../views/common/footer.hbs',
                })
                    .then(function () {
                        this.partial('../../views/user/userPage.hbs');
                    })
            })
    }

    return {
        getRegisterTemplate,
        loginUser,
        getLoginTemplate,
        createUser,
        logoutUser,
        getUserInfo,

    }
}();