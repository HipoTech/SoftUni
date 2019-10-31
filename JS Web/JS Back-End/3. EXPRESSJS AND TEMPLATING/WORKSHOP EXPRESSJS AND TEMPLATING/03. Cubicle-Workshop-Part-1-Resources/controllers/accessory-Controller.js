const path = require('path');
const { Accessoryes, Accessorydb } = require(path.resolve(__projectDir, 'models', 'accessory-model'));
const { updateDbElement, create } = require(path.resolve(__projectDir, 'helpers', 'requester'));
const { Cube } = require(path.resolve(__projectDir, 'models', 'cube-model'));

const createAccessory = function (req, res) {
    const { name, description, imageUrl } = req.body;
    const newAccessory = new Accessoryes(name, description, imageUrl);
    create(Accessorydb, newAccessory, req, res);
};

const attachAccessory = function (req, res) {
    cubeId = req.params.id;
    accessoryId = req.body.accessory;
    Accessorydb.findById(accessoryId)
        .then((accessory) => {
            updateDbElement(Cube, cubeId, { $push: { accessories: accessory } }, req, res);
        })
        .then(() => {
            updateDbElement(Accessorydb, accessoryId, { $push: { cubes: cubeId } }, req, res)
        })
        .then(() => res.redirect(`/details/${cubeId}`))
        .catch((error) => {
            console.log(`Faild to search in DB. Error: ${error}`)
            res.send('Server Error!')
        });
}

module.exports = {
    createAccessory,
    attachAccessory,

}