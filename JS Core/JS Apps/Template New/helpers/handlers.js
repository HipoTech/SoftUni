const handler = function () {

    const showError = function (string) {
        const errorBlock = document.getElementById('errorBox');
        errorBlock.textContent = string;
        errorBlock.style.display = 'block';

        setTimeout((() => {
            errorBlock.style.display = 'none';
            errorBlock.textContent = '';
        }), 3000);
    }

    const showInfo = function (string) {
        const errorBlock = document.getElementById('infoBox');
        errorBlock.textContent = string;
        errorBlock.style.display = 'block';

        setTimeout((() => {
            errorBlock.style.display = 'none';
            errorBlock.textContent = '';
        }), 3000);
    }

    const recogniseError = function (errorNumber) {

        switch (errorNumber.toString()) {
            case '409':
                handler.showError('This user name is auready registered');
                break;
            case '401':
                handler.showError('Invalid username or password!');
                break;
            case '204':
                handler.showError('Invalid username or password!');
                break;
            default:
                break;
        }
    }

    const checkServerResponse = function (serverResponse) {
        if (serverResponse.status > 200) {
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

    return {
        checkServerResponse,
        showError,
        showInfo,
        clearUserForm,

    }

}();