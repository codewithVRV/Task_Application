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
        console.error(err.message);
        res.status(500).send('Server error');
    }
}