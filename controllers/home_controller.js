const TaskList = require("../models/task.js");

module.exports.home = function (req, res) {
  // return res.render('home', { title: "TODO List", taskList: TaskList });
  return res.send("Homepage");
};

module.exports.addTask = function (req, res) {
  return res.send("task added");
};
module.exports.deleteTasks = function (req, res) {
  return res.send("task deleted");
};
