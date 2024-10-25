const Task = require("../models/tasks");



exports.createTask = async (req, res) => {
    const {title, description} = req.body;
    try{
        if(!title || !description) return "Credentials are Missing."
        const task = new Task({
            title,
            description,
        })

        await task.save()
        res.json(task)
    }
    catch (err) {
        console.log("Error caught by getAllTasks", error)
        res.status(500).send('Server error');
    }
}

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    }
    catch(error) {
        console.log("Error caught by getAllTasks", error)
        res.status(500).json({message: "Failed to fetch the tasks"})
    }
}

exports.getTaskById = async (req, res) => {
    const {id} = req.params;
    try{
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json({message: "Task Not Found!"})
        }
        res.status(200).json(task)
    }
    catch(error) {
        console.log("error caught by geting single task", error)
        res.status(500).json({message: "Internal Server Error!"})
    }
}


exports.deleteTaskById = async (req, res) => {
    const {id} = req.params;
    try{
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json({message: "Task Not Found!"})
        }
        res.status(200).json({message: "Task Deleted Successfully!", task: task})
    }
    catch(error) {
        console.log("error caught by geting deleted single task", error)
        res.status(500).json({message: "Internal Server Error!"})
    }
}











