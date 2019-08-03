const requester = function () {
    const baseUrl = "https://baas.kinvey.com/";

    const appKey = "kid_HJMXduoMr";
    const appSecret = "c2ef57e2ebf34bbc9e7a17a311943b1a";

    const get = function (endpoint, userOrAppData, authType) {
        const headers = makeHeaders(authType, 'GET');
        const url = `${baseUrl}${userOrAppData}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const post = function (endpoint, userOrAppData, authType, data) {
        const headers = makeHeaders(authType, 'POST', data);
        const url = `${baseUrl}${userOrAppData}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const put = function (endpoint, userOrAppData, authType, data) {
        const headers = makeHeaders(authType, 'PUT', data);
        const url = `${baseUrl}${userOrAppData}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const del = function (endpoint, userOrAppData, authType) {
        const headers = makeHeaders(authType, 'DELETE');
        const url = `${baseUrl}${userOrAppData}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const makeAuth = (authType) => {
        return authType === 'Basic'
            ? 'Basic ' + btoa(appKey + ':' + appSecret)
            : 'Kinvey ' + localStorage.getItem('token' + appKey);
    }

    const makeHeaders = (authType, httpMethod, data) => {
        const headers = {
            method: httpMethod,
            headers: {
                'Authorization': makeAuth(authType),
                'Content-Type': 'application/json'
            }
        };

        if (httpMethod === 'POST' || httpMethod === 'PUT') {
            headers.body = JSON.stringify(data);
        }

        return headers;
    }

    return {
        get,
        post,
        del,
        put,
    }
}();