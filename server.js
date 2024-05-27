const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskModel = require("./models/task")
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/colour')
.then(() => console.log('MongoDB connected to the colour database'))
.catch(err => console.log('MongoDB connection error:', err));

app.get('/get', (req, res) => {
  TaskModel.find()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => res.json(err))
});

app.post('/add', (req, res) => {
  const {title, category} = req.body;
  TaskModel.create({
    title,
    category,
  })
  .then(newTask => res.json(newTask))
  .catch(err => {res.status(500); console.log(err.message)})
})

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});