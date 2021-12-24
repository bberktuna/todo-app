const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()

const TodoRoute = require("./routes/todo")
const AuthRoute = require("./routes/auth")

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", (err) => {
  console.log(err)
})

db.once("open", () => {
  console.log("database connection established")
})
const app = express()

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/uploads", express.static("uploads"))
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

app.use("/api/todo", TodoRoute)
app.use("/api", AuthRoute)
