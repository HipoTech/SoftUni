function Login(inputArr) {
    let username = inputArr[0];
    let password = '';
    let len = username.length;
    for (let j = len - 1; j >= 0; j--) {
        password += username[j];
    }
    for (let i = 1; i <= 4; i++) {

        if (inputArr[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (i === 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }

    }

}
Login(['Acer', 'login', 'go', 'let me in', 'recA'])