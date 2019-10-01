const Cube = require('../models/cube').Cube;
const fs = require('fs');
const path = require('path');
const dbFile = path.resolve(__projectDir, 'config/database.json');

const _readDb = async function () {
    await fs.readFile(dbFile, 'utf8', (err, data) => {
        if (err) {
            throw new Error(err);
        };
        dbData = data;
    });
}

let dbData = _readDb();

const _writeDb = function (data) {
    fs.writeFile(dbFile, data, (err) => {
        if (err) {
            throw new Error(err);
        };
    });
}

const createCube = function (req, res) {

    dbData = JSON.parse(dbData);
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const id = dbData.length + 1;
    const newCube = new Cube(id, name, description, imageUrl, difficultyLevel);
    dbData.push(newCube);
    //_writeDb(dbData);
    //res.redirect('/');
};

module.exports = {
    createCube,

}