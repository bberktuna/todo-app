// const mongoose = require("mongoose")
// const Schema = mongoose.Schema

// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//     },
//     password: {
//       type: String,
//     },
//     email: {
//       type: String,
//     },
//   },

// )

// const User = mongoose.model("User", userSchema)

//module.exports = User

const Joi = require("joi")
const mongoose = require("mongoose")

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 18,
      },
      email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 55,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 18,
      },
    },
    { timestamps: true }
  )
)

function validateUser(user) {
  const schema = {
    username: Joi.string().min(3).max(18).required(),
    email: Joi.string().min(5).max(55).required().email(),
    password: Joi.string().min(5).max(18).required(),
  }
  return Joi.validate(user, schema)
}

exports.User = User
exports.validate = validateUser
