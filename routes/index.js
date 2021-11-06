const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

// 3 possible routes for 3 possible actions
// To delete tasks
router.post("/delete-tasks", homeController.deleteTasks);
// To add new task
router.post("/add-task", homeController.addTask);
// show Home
router.get("/", homeController.home);

module.exports = router;
