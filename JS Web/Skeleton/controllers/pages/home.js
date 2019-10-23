const models = require('../../models');

const homePage = function (req, res, next) {
    const user = req.user;
    let isAdmin = false;
    if (user) {
        if (user.role === 'Admin') {
            isAdmin = true;
        }
    }
    models.courseModel.find().then(courses => {
        courses.forEach(cube => {
            if (user && courses) {
                const creator = JSON.stringify(cube.creatorId);
                const userId = JSON.stringify(user._id);
                if (creator === userId) {
                    cube.accessoriesEddited = true;
                } else {
                    cube.accessoriesEddited = false;
                }
            }
        });
        res.render('home.hbs', {
            courses,
            user,
            isAdmin
        });
    }).catch(next);
}

module.exports = {
    homePage,

}