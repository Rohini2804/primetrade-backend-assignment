const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const {
  auth
} = require("../middleware/authMiddleware");


router.post("/create", auth, createTask);
router.get("/", auth, getTasks);
router.put("/update/:id", auth, updateTask);
router.delete("/delete/:id", auth, deleteTask);

module.exports = router;