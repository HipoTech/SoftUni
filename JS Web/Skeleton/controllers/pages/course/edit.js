const models = require('../../../models');

const edit = function (req, res, next) {
    const id = req.params.id;
    const user = req.user;
    models.courseModel.findOne({ _id: id }).then(course => {
        if (course) {
            res.render('admin-pages/course-edit.hbs', { course, user });
        } else {
            res.redirect('/');
        }
    }).catch(next);
}

const submitEdit = function (req, res, next) {
    const id = req.params.id;
    let { title = null, description = null, imageUrl = null, isPublic = false } = req.body;
    if (isPublic === 'on') {
        isPublic = true;
    }

    models.courseModel.updateOne({ _id: id }, { title, description, imageUrl, isPublic }, { runValidators: true })
        .then(course => {
            res.redirect('/');
        }).catch(err => {
            if (err.name === 'ValidationError') {
                res.render('500.hbs', {
                    errorMessage: err.errors.description
                });
                return;
            }
            next(err);
        });
}

module.exports = {
    edit,
    submitEdit,

}