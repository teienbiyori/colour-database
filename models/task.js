const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {type: String},
  category: {type: String},
  isDone: {type: Boolean, default: false},
}, 
{ 
  versionKey: false,
  collection: 'tasks', // Specify the collection name
})

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;