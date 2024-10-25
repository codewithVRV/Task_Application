const express = require("express");
const { createTask, getAllTasks, getTaskById, deleteTaskById } = require("../controllers/taskController");
const router = express.Router()

router.post("/", createTask)
router.get("/", getAllTasks)
router.get("/:id", getTaskById)
router.delete("/:id", deleteTaskById)

module.exports = router;