const create = function (Model, object, req, res) {
    Model.create(object)
        .then(() => console.log(`Sucksesfuli added to DB`))
        .then(() => res.redirect('/'))
        .catch((error) => console.log(`Faild to write to DB. Error: ${error}`));
}

const readAll = function (Model) {
    return Model.find()
        .then((resultFromDB) => {
            return resultFromDB;
        })
        .catch((error) => {
            console.log(`Faild to search in DB. Error: ${error}`)
            res.send('Server Error!')
        });
}

const updateDbElement = function (Model, id, updatedKVP, req, res) {
    Model.updateOne({ _id: id }, updatedKVP)
        .then(() => {
            console.log(`Updated server object with id: ${id}`);
        })
        .catch((error) => {
            console.log(`Faild to search in DB. Error: ${error}`)
            res.send('Server Error!');
        });;
}

const deleteOne = function (Model, id) {
    return Model.findByIdAndDelete(id)
        .then(() => console.log(`Item deleted from DB: ${id}`));
}

module.exports = {
    create,
    readAll,
    updateDbElement,
    deleteOne,

}