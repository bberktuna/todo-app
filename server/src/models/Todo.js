const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema(
  {
    text: {
      type: String,
    },
  },

  { timestamps: true }
)

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo
