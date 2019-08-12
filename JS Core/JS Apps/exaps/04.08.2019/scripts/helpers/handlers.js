const handler = function () {

    // const showError = function (string) {
    //     const errorBlock = document.getElementById('errorBox');
    //     errorBlock.textContent = string;
    //     errorBlock.style.display = 'block';

    //     document.querySelector('body').addEventListener('click', () => errorBlock.style.display = 'none')
    // }

    // const delay = function (t, v) {
    //     return new Promise(function (resolve) {
    //         setTimeout(resolve.bind(null, v), t)
    //     });
    // }

    // const showInfo = function (string) {
    //     const errorBlock = document.getElementById('successBox');

    //     errorBlock.textContent = string;
    //     errorBlock.style.display = 'block';

    //     document.querySelector('body').addEventListener('click', () => errorBlock.style.display = 'none')

    //     setTimeout((() => {
    //         errorBlock.style.display = 'none';
    //         errorBlock.textContent = '';
    //     }), 3000);
    // }

    const recogniseError = function (errorNumber) {

        switch (errorNumber.toString()) {
            case '409':
                // handler.showError('This user name is auready registered');
                break;
            case '401':
                // handler.showError('Invalid credentioals. Please retry your request with correct credentials.');
                break;
            case '204':
                // handler.showError('aaaaa');
                break;
            default:
                break;
        }
    }

    const checkServerResponse = function (serverResponse) {
        if (serverResponse.status > 204) {
            recogniseError(serverResponse.status);
            throw new Error(`Server Error Detected: ${serverResponse.status}`)
        }
        return serverResponse.json();
    };

    const clearUserForm = (elementsToClear) => {
        elementsToClear.forEach(element => {
            element.value = '';
        });

    }

    const addHeaderInfo = function (context) {
        const loggedIn = localStorage.getItem('authtoken') !== null;

        if (loggedIn) {
            context.loggedIn = loggedIn;
            context.username = localStorage.getItem('username');
        }
    }

    const loadPartials = function (context, externalPartials) {
        let defaultPartials = {
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        };

        if (externalPartials) {
            for (const key in externalPartials) {
                const element = externalPartials[key];

                defaultPartials[key] = element;
            }
        }

        return context.loadPartials(defaultPartials);
    }


    return {
        checkServerResponse,
        // showError,
        // delay,
        // showInfo,
        clearUserForm,
        addHeaderInfo,
        loadPartials,

    }

}();