const path = require('path');
const { getDetailidCube } = require(path.resolve(__projectDir, 'controllers', 'cube-Controller'));
const { Accessorydb } = require(path.resolve(__projectDir, 'models', 'accessory-model'));

function renderDetailsPage(req, res) {
    getDetailidCube(req, res)
        .then((cube) => {
            Accessorydb.find({ cubes: { $nin: cube.id } })
                .then((accessories) => {
                    const template = path.resolve('views', 'accessories', 'details-accessory.hbs');
                    res.render(template, { cube, accessories });
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