const bcrypt = require('bcrypt');
const { errorHandler } = require('../helpers/helper');
const saltRounds = 10;

const hashPassword = async (password) => {
    const salt = await bcrypt.hash(password, saltRounds);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}






module.exports = {
    hashPassword,

}