const userModel = function () {

    const register = function (ctx) {
        const userCredentials = {
            username: ctx.params.username,
            password: ctx.params.password,
        };

        const appKeyAndPass = btoa(`${storage.appKey}:${storage.appSecret}`);
        const regAuthotization = `Basic ${appKeyAndPass}`;
        const regUrl = storage.baseUrl + `/user/${storage.appKey}`
        const regHeaders = {
            body: JSON.stringify(userCredentials),
            headers: {
                Authorization: regAuthotization,
            },
        }
        const elementsToClear = [
            document.getElementById('password'),
            document.getElementById('repeatPassword'),
            document.getElementById('username')
        ]

        return requester.post(regUrl, regHeaders)
            .then((response) => handler.checkServerResponse(response))
            .then(() => handler.clearUserForm(elementsToClear))
            .catch(error => console.log(`Error detected: ${error}`));;

    }

    const login = function (ctx) {
        const userCredentials = {
            username: ctx.params.username,
            password: ctx.params.password,
        };
        const userNameAndPass = btoa(`${userCredentials.username}:${userCredentials.password}`);
        const loginAuthotization = `Basic ${userNameAndPass}`;
        const loginUrl = storage.baseUrl + '/user/' + storage.appKey + '/login'
        const loginHeaders = {
            body: JSON.stringify(userCredentials),
            headers: {
                Authorization: loginAuthotization,
            },
        }
        const elementsToClear = [
            document.getElementById('password'),
            document.getElementById('username')
        ]
        return requester.post(loginUrl, loginHeaders)
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(loginResponse => {
                storage.saveData('token', loginResponse._kmd.authtoken);
                storage.saveData('username', loginResponse.username);
            })
            .then(() => handler.showInfo('loged in!'))
            .then(() => ctx.redirect('#/home'))
            .then(() => handler.clearUserForm(elementsToClear))
            .catch(response => console.log(response));
    }

    const logout = function (ctx) {
        const loginUrl = storage.baseUrl + '/user/' + storage.appKey + '/_logout'
        const loginHeaders = {
            headers: {},
        };

        return requester.post(loginUrl, loginHeaders)
            .then(() => storage.deleteUser())
            .then(() => handler.showInfo('loged out!'))
            .then(() => ctx.redirect('#/home'))
            .catch((error) => console.log(`Server error detected: ${error}`))
    }

    return {
        register,
        login,
        logout,

    }
}();