const accessoryModels = require('../models/accessory-model');
const Accessorydb = accessoryModels.Accessorydb;
const Accessoryes = accessoryModels.Accessoryes;

const postAccessory = function (element, req, res) {
    Accessorydb.create(element)
        .then((elementFromDb) => console.log(`Sucksesfuli added to DB: ${elementFromDb}`))
        .then(() => res.redirect('/'))
        .catch((error) => console.log(`Faild to write to DB. Error: ${error}`));
}

const createAccessory = function (req, res) {
    const { name, description, imageUrl } = req.body;
    const newAccessory = new Accessoryes(name, description, imageUrl);
    postAccessory(newAccessory, req, res);
};

module.exports = {
    createAccessory,
}