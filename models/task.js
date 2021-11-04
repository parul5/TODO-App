const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
});

const TaskList = mongoose.model("TaskList", taskSchema); //

module.exports = TaskList;
