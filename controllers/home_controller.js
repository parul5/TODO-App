const TaskList = require("../models/task.js");

// function to display home
module.exports.home = function (req, res) {
  TaskList.find({}, function (err, tasks) {
    if (err) {
      console.log("error in fetching Tasks");
      return;
    }

    // sorting tasks based on due date
    tasks.sort((a, b) => a.dueDate - b.dueDate);

    return res.render("home", { title: "TODO List", taskList: tasks });
  });
};

// Function to Add tasks
module.exports.addTask = function (req, res) {
  // create new document and add it to database
  TaskList.create(
    {
      description: req.body.description,
      category: req.body.category,
      dueDate: req.body.dueDate,
    },
    function (err, newTask) {
      if (err) {
        console.log("Error in adding new Task to DB : ", err);
        return;
      }

      console.log("Adding to DB : ", newTask);
    }
  );
  // taking user back to homepage
  return res.redirect("back");
};

// function to delete tasks from DB
module.exports.deleteTasks = function (req, res) {
  TaskList.deleteMany(
    {
      _id: { $in: req.body.taskId },
    },
    function (err) {
      if (err) console.log("Error in deleting tasks", err);
      return;
    }
  );
  return res.redirect("back");
};
