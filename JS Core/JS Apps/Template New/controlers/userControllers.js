const userController = function () {

    const getRegisterTemplate = function (ctx) {
        ctx.loggedIn = storage.getData('token') !== undefined;
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        })
            .then(function () {
                this.partial('./views/register/registerPage.hbs');
            })
    };

    const getLoginTemplate = function (ctx) {
        ctx.loggedIn = storage.getData('token') !== undefined;
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        })
            .then(function () {
                this.partial('./views/login/loginPage.hbs');
            })

    };

    const createUser = function (ctx) {
        validatePasword(ctx);
    };

    const loginUser = function (ctx) {
        userModel.login(ctx)
    };

    const logoutUser = function (ctx) {
        userModel.logout(ctx)
    };

    const validatePasword = function (ctx) {
        const password = document.getElementById('password').value;
        const repeatPassword = document.getElementById('repeatPassword').value;
        const userName = document.getElementById('username').value;
        const passwordMatch = password === repeatPassword;
        const hasNoEmptyFields = userName === '' || password === '' || repeatPassword === '';

        if (hasNoEmptyFields) {
            handler.showError('Please fill all the fields!');
        } else if (passwordMatch) {
            return userModel.register(ctx)
        } else {
            handler.showError('passwords don\'t match');
        }
    }



    return {
        getRegisterTemplate,
        loginUser,
        getLoginTemplate,
        createUser,
        logoutUser,

    }
}();