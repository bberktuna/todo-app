const Todo = require("../models/Todo")

//! Return the list of TODOS
const todos = (req, res, next) => {
  Todo.find()
    .then((response) => {
      res.json({
        response,
      })
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      })
    })
}

//! Return single todo
const todo = (req, res, next) => {
  let todoID = req.body.todoID
  Todo.findById(todoID)
    .then((response) => {
      res.json({
        message: "showing todo",
      })
    })
    .catch((error) => {
      res.json({ message: "An error occured!" })
    })
}

//! create todo
const createTodo = (req, res, next) => {
  let todo = new Todo({
    text: req.body.text,
  })
  // if (req.file) {
  //   user.avatar = req.file.path
  // }
  todo
    .save()
    .then((response) => {
      res.json({
        message: "todo created succesfully",
      })
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      })
    })
}

//! update todo
const updateTodo = (req, res, next) => {
  let todoID = req.user.todoID

  let updatedData = {
    text: req.body.text,
  }

  Todo.findByIdAndUpdate(todoID, { $set: updatedData })
    .then(() => {
      res.json({ message: "todo updated succesfully!" })
    })
    .catch((error) => {
      res.json({ message: "an error occured" })
    })
}

//! delete todo
const deleteTodo = (req, res, next) => {
  let todoID = req.body.todoID

  Todo.findByIdAndRemove(todoID)
    .then(() => {
      req.json({ message: "todo deleted" })
    })
    .catch((error) => {
      req.json({ message: "an error occured" })
    })
}

module.exports = {
  todos,
  todo,
  createTodo,
  updateTodo,
  deleteTodo,
}
