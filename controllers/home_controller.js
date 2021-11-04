const TaskList = require("../models/task.js");

module.exports.home = function (req, res) {
  TaskList.find({}, function (err, tasks) {
    if (err) {
      console.log("error in fetching Tasks");
      return;
    }
    return res.render("home", { title: "TODO List", taskList: tasks });
  });
};

module.exports.addTask = function (req, res) {
  TaskList.create(
    {
      description: req.body.description,
      category: req.body.category,
      dueDate: req.body.duedate,
    },
    function (err, newTask) {
      if (err) {
        console.log("Error in adding new Task to DB : ", err);
        return;
      }

      console.log(newTask);
    }
  );
  console.log("req body :", req.body);
  return res.redirect("back");
};

module.exports.deleteTasks = function (req, res) {
  return res.send("task deleted");
};
