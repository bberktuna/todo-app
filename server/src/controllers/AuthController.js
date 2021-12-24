const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res, next) => {
  User.find({})
  const hashedPass = await bcrypt.hash(req.body.password, 12)

  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
  })

  user
    .save()
    .then((user) => {
      res.json({
        message: "register successfulyy",
      })
    })
    .catch((error) => {
      res.json({
        message: "an error occured while registering",
      })
    })
}

const login = (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  User.findOne({ $or: [{ email: username }] }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          })
        }
        if (result) {
          let token = jwt.sign(
            { username: user.username },
            process.env.JWT_SECRET
          )
          res.json({
            message: "logged in",
            token,
          })
        } else {
          res.json({
            message: "password does not match",
          })
        }
      })
    } else {
      res.json({
        message: "user not found",
      })
    }
  })
}

module.exports = {
  register,
  login,
}
