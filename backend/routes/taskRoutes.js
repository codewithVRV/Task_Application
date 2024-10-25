const express = require("express");
const { createTask, getAllTasks, getTaskById, deleteTaskById, updateTaskById } = require("../controllers/taskController");
const router = express.Router()

router.post("/", createTask)
router.get("/", getAllTasks)
router.get("/:id", getTaskById)
router.delete("/:id", deleteTaskById)
router.put("/:id", updateTaskById)

module.exports = router;