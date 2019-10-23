const models = require('../../../models');

const renderAttachLecture = function (req, res, next) {
    const { id: courseId } = req.params;
    const user = req.user;
    models.courseModel.findById(courseId).populate('Lectures')
        .populate('lectures')
        .then((course) => {
            res.render('admin-pages/lecture-panel.hbs', { course, user });
        }).catch(next);
}

const createLecture = function (req, res, next) {
    const { title = null, videoUrl = null } = req.body;
    const id = req.params.id;
    models.lectureModel.create({ title, videoUrl, course: id })
        .then((created) => attachLecture(req, res, next, created, id))
}

const attachLecture = function (req, res, next, created, id) {
    const user = req.user;
    const lecture = created;

    if (user.role === 'Admin') {
        models.lectureModel.findByIdAndUpdate({ _id: lecture._id }, { $push: { course: id } })
        models.courseModel.findByIdAndUpdate({ _id: id }, { $push: { lectures: lecture._id } })
            .populate('lectures')
            .then((course) => {
                res.render(`admin-pages/lecture-panel.hbs`, { course });
            })
            .catch(next);
    }
}

const deleteLecture = function (req, res, next) {
    const user = req.user;
    const id = req.params.id;
    let courseId;

    if (user.role === 'Admin') {
        models.lectureModel.findById(id)
            .then((find) => {
                courseId = find.course
                models.courseModel.findByIdAndUpdate(courseId, { $pull: { lectures: id } }, { multi: true })
                    .then(() => {
                        res.redirect(`/addLecture/${courseId}`);
                    })
                    .catch(next);
            });
    }
}

module.exports = {
    renderAttachLecture,
    createLecture,
    attachLecture,
    deleteLecture,
}