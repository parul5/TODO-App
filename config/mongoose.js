// configuration file for mongoose

const mongoose = require("mongoose");

// connecting to mongoDB
mongoose.connect("mongodb://localhost/todo_tasks_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to db"));
db.once("open", function () {
  console.log("succesfully connected to db");
});
