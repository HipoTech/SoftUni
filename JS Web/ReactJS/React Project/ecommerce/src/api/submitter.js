import api from './apiRoots'

const data = {
    userName: 'Hipo',
    password: '1234',
    email: 'hipo@abv.bg',
}

const registerUser = () => {
    const user = data;
    fetch(api.userRegister, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user) // body data type must match "Content-Type" header
    })
        .then(console.log(JSON.stringify(user)))
        .catch(error => console.log(`Error while fetching: ${error}`))
}
registerUser();

export {
    // registerUser,

}