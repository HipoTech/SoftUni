const path = require('path');
const bcrypt = require('bcrypt');
const { User, UserObject } = require('../models').user;
const { hashPassword, create, matchPassword } = require('../helpers');

const createUser = async function (req, res) {
    const { userName } = req.body;
    let { password } = req.body;
    const { repeatPassword } = req.body;
    matchPassword(password, repeatPassword, req, res);
    password = await hashPassword(password);
    const newUser = new UserObject(userName, password);
    create(User, newUser, req, res);
}

const loginUser = function (req, res) {
    const { userName } = req.body;
    const { password } = req.body;

    User.find({'userName': userName})
    .then((user) => {
        bcrypt.compare(password, user.password, function(err, res) {
            // res == true
            if (err) {
                console.log('no');
                
            }
            if (res) {
                console.log('yes');
                
            }
        });

    })

    
}

module.exports = {
    createUser,
    loginUser,

}