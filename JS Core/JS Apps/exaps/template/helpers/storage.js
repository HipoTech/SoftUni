const storage = function () {
    const appKey = 'kid_rJtHIqmMr';
    const appSecret = '960d4529b5454163a491864f46b8cf6b';
    const baseUrl = 'https://baas.kinvey.com';

    const getData = function (key) {
        return localStorage.getItem(key + appKey);
    };
    const saveData = function (key, value) {
        localStorage.setItem(key + appKey, value);
    };
    const saveUser = function (data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
    };
    const deleteUser = function () {
        localStorage.removeItem('username' + appKey);
        localStorage.removeItem('token' + appKey);
    };
    return {
        saveData,
        getData,
        saveUser,
        deleteUser,
        appKey,
        appSecret,
        baseUrl,

    }
}();