const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

})

class UserObject {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}

const User = mongoose.model('User', userSchema);

module.exports = { User, UserObject };
