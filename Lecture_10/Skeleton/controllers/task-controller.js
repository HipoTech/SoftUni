const Task = require('../models/model')
module.exports = {
  getIndex: function (req, res) {
    Task
      .find({})
      .then((tasksList) => {
        let opened = tasksList.filter((task) => task.status === 'Open');
        let inProgress = tasksList.filter((task) => task.status === 'In Progress');
        let finished = tasksList.filter((task) => task.status === 'Finished');
        return res.render('index', { openTasks: opened, inProgressTasks: inProgress, finishedTasks: finished });
      })

  },
  getCreate: function (req, res) {
    return res.render('create');
  },
  postCreate: function (req, res) {
    let bandFromCreate = req.body;
    Task
      .create(bandFromCreate)
      .then(() => {
        return res.redirect('/')
      })
  },
  getEdit: function (req, res) {
    let taskForEdit = req.params.id;
    Task
      .findById(taskForEdit)
      .then((result) => {
        return res.render('edit', { task: result })
      })
  },
  postEdit: function (req, res) {
    let taskForEdit = req.params.id;
    let modyfiedTask = req.body;
    Task
      .findByIdAndUpdate(taskForEdit, modyfiedTask)
      .then(() => {
        return res.redirect('/')
      })
  },
  getDelete: function (req, res) {
    let taskForEdit = req.params.id;
    Task
      .findById(taskForEdit)
      .then((result) => {
        return res.render('delete', { task: result })
      })
  },
  postDelete: function (req, res) {
    let taskForEdit = req.params.id;
    let modyfiedTask = req.body;
    Task
      .findByIdAndRemove(taskForEdit, modyfiedTask)
      .then(() => {
        return res.redirect('/')
      })
  }
};