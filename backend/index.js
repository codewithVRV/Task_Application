const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require("./routes/taskRoutes")
const authRoutes = require("./routes/auth")
const connectDB = require('./config/database');

const app = express();
connectDB();

app.use(bodyParser.json());
app.get("/home", (req, res) => {
    res.send({message: "Welcome to the polling app!"});
    console.log("welcome to the polling app!")
})
app.use(cors({
    origin: 'http://localhost:5173', // Or specify domains
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
  }))
app.use(express.json());
app.use(express.text())
app.use(express.urlencoded({ extended: true }))
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})