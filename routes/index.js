const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.delete("/delete-tasks", homeController.deleteTasks);
router.post("/add-task", homeController.addTask);
router.get("/", homeController.home);

module.exports = router;
