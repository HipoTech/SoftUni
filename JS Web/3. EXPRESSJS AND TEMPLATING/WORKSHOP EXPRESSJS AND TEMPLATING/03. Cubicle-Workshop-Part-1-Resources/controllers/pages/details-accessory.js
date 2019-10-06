const { getDetailidCube } = require('../cube-Controller');
const { Accessorydb } = require('../../models/accessory-model');
const { readAll } = require('../../helpers/requester');

function renderDetailsPage(req, res) {
    getDetailidCube(req, res)
        .then((cube) => {
            Accessorydb.find({ cubes: { $nin: cube.id } })
                .then((accessories) => {
                    res.render('../views/details-accessory.hbs', { cube, accessories });
                })
                .catch((error) => {
                    console.log(`Faild to search in DB. Error: ${error}`)
                    res.send('Server Error!')
                })
        })
}

module.exports = {
    renderDetailsPage,

}