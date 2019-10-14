const matchPassword = function (pass1, pass2, req, res) {
    if (pass1 !== pass2) {
        // res.send('Password missmach');
        res.redirect('/register');
        throw new Error('Not matching passwords!');
    }
}

module.exports = {
    matchPassword,

}