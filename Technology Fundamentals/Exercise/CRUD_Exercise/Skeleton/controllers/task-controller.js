const Task = require('../models/model')
module.exports = {
  getIndex: function (req, res) {
    // TODO: get all open, inProgress and finished tasks, pass them to the index view and render it
    Task.find({})
      .then((allTasks) => {
        const openedTasks = allTasks.filter((task) => task.status === 'Open');
        const finishedTasks = allTasks.filter((task) => task.status === 'Finished');
        const inProgresTasks = allTasks.filter((task) => task.status === 'In Progress');
        return res.render('index', { openTasks: openedTasks, inProgressTasks: inProgresTasks, finishedTasks: finishedTasks });
      })
  },
  getCreate: function (req, res) {
    // TODO: render the create view
    return res.render('create');
  },
  postCreate: function (req, res) {
    // TODO: create new task and redirect to the index view
    // console.log(req.body); - for test
    Task.create(req.body)
      .then((createdTask) => {
        console.log(createdTask)
        return res.redirect('/')
      })
      .catch((err) => console.warn(err)
      );


  },
  getEdit: function (req, res) {
    // TODO: get the task for editing, pass it to the edit view and render it
    let id = req.params.id;
    Task.findById(id)
      .then((taskForEddit) => {
        taskForEddit.open = taskForEddit.status === 'Open';
        taskForEddit.finished = taskForEddit.status === 'Finished';
        taskForEddit.inProgress = taskForEddit.status === 'In Progress';
        return res.render('edit', { task: taskForEddit });
      })
  },
  postEdit: function (req, res) {
    // TODO: update the task and redirect to index view
    let id = req.params.id;
    let newStatus = req.body;

    Task.findByIdAndUpdate(id, newStatus)
      .then(() => {
        return res.redirect('/')
      })
  },
  getDelete: function (req, res) {
    // TODO: get the task for deleting, pass it to the detele view and render it
    let id = req.params.id;
    Task.findById(id)
      .then((taskForEddit) => {
        taskForEddit.open = taskForEddit.status === 'Open';
        taskForEddit.finished = taskForEddit.status === 'Finished';
        taskForEddit.inProgress = taskForEddit.status === 'In Progress';
        return res.render('delete', { task: taskForEddit });
      })
  },
  postDelete: function (req, res) {
    // TODO: delete the task and redirect to the index view
    let id = req.params.id;
    let newStatus = req.body;

    Task.findByIdAndRemove(id, newStatus)
      .then(() => {
        return res.redirect('/')
      })
  }
};