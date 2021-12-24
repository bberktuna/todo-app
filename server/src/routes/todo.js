const express = require("express")
const Router = express.Router()

const TodoController = require("../controllers/TodoController")
const upload = require("../middleware/upload")
const authenticate = require("../middleware/authenticate")

Router.get("/", authenticate, TodoController.todos)
Router.post("/todo", authenticate, TodoController.todo)
Router.post(
  "/createTodo",
  authenticate,
  //  upload.single("avatar"),
  TodoController.createTodo
)
Router.post("/updateTodo", authenticate, TodoController.updateTodo)
Router.post("/deleteTodo", authenticate, TodoController.deleteTodo)

module.exports = Router
