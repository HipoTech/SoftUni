const models = require('../models');
const { homePage, edit, submitEdit } = require('./pages');

module.exports = {
  get: {
    homePage,
    details: async function (req, res, next) {
      const id = req.params.id;
      const user = req.user;
      try {
        const cube = await models.courseModel.findById(id).populate('accessories');
        if (!cube) { res.redirect('/not-found'); return; }
        if (user) {
          const creator = JSON.stringify(cube.creatorId);
          const userId = JSON.stringify(user._id);
          if (creator !== userId) {
            res.render('details.hbs', { cube });
          } else {
            res.render('details.hbs', { cube, user });
          }
        } else {
          res.render('details.hbs', { cube });
        }
      }
      catch (e) {
        next(e);
      }
    },
    notFound: function (req, res) {
      res.render('404.hbs');
    },
    about: function (req, res) {
      res.render('about.hbs');
    },
    create: function (req, res) {
      res.render('admin-pages/course-create.hbs');
    },
    edit,
    delete: function (req, res, next) {
      const id = req.params.id;
      const user = req.user;
      models.courseModel.findOne({ _id: id, creatorId: user._id }).then(cube => {
        if (!cube) {
          res.render('404.hbs');
          return;
        }
        const options = [
          { title: '1 - Very Easy', selected: 1 === cube.difficultyLevel },
          { title: '2 - Easy', selected: 2 === cube.difficultyLevel },
          { title: '3 - Medium (Standard 3x3)', selected: 3 === cube.difficultyLevel },
          { title: '4 - Intermediate', selected: 4 === cube.difficultyLevel },
          { title: '5 - Expert', selected: 5 === cube.difficultyLevel },
          { title: '6 - Hardcore', selected: 6 === cube.difficultyLevel }
        ];
        res.render('deleteCube.hbs', { cube, options });
      }).catch(next);
    }
  },
  post: {
    create: function (req, res) {
      let { title = null, description = null, imageUrl = null, isPublic } = req.body;
      const { user } = req;
      if (isPublic === 'on') {
        isPublic = true;
      } else {
        isPublic = false;
      }
      models.courseModel
        .create({ title, description, imageUrl, isPublic })
        .then(course => {
          res.redirect('/');
        });
    },
    submitEdit,
    delete: function (req, res, next) {
      const id = req.params.id;
      const { user } = req

      models.courseModel.deleteOne({ _id: id, creatorId: user._id })
        .then((cube) => {
          if (!cube) {
            res.render('404.hbs');
            return;
          }
          res.redirect('/');
        });
    },

  }
};
