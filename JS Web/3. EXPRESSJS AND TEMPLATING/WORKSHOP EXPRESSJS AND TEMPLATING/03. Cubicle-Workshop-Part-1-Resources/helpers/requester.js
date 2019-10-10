const create = function (Model, object, req, res) {
    return Model.create(object)
        .then(() => console.log(`Sucksesfuly added to DB`))
        .then(() => res.redirect('/'))
        .catch((error) => console.log(`Faild to write to DB. Error: ${error}`));
}

const readAll = function (Model) {
    return Model.find()
        .then((resultFromDB) => {
            return resultFromDB;
        })
        .catch((error) => console.log(`Faild to search in DB. Error: ${error}`));
}

const updateDbElement = function (Model, id, updatedKVP, req, res) {
    return Model.updateOne({ _id: id }, updatedKVP)
        .then(() => {
            console.log(`Updated server object with id: ${id}`);
        })
        .catch((error) => { console.log(`Faild to search in DB. Error: ${error}`) });;
}

const deleteOne = function (Model, id) {
    return Model.findByIdAndDelete(id)
        .then(() => console.log(`Item deleted from DB: ${id}`))
        .catch((error) => console.log(`Server error while deleting: ${error}`))
}

module.exports = {
    create,
    readAll,
    updateDbElement,
    deleteOne,

}