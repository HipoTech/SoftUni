const storage = function () {

    const getData = function (key) {
        return localStorage.getItem(key);
    };
    const saveData = function (key, value) {
        localStorage.setItem(key, value);
    };
    const saveUser = function (data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
    };
    const deleteUser = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    };
    return {
        saveData,
        getData,
        saveUser,
        deleteUser,

    }
}();