const storage = function () {
    const appKey = 'kid_HJMXduoMr';
    const appSecret = 'c2ef57e2ebf34bbc9e7a17a311943b1a';
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