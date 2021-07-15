const express = require("express") //import express
const cors = require("cors") //import cors
const mongoose = require("mongoose") //import mongoose
require("dotenv/config") //importing dotenv library to use variable

const app = express() //creating app as Express
app.use(express.json()) //use express and parse everything into json

//connect to mongoose (copy connection string from atlas)(need to reference process.env. then the connection variable in another file)
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoose..."))
  .catch((err) => console.error(err))

//creating a get route
app.get("/", (req, res) => {
  res.send("Houston, we're good!")
})

//first param is the port, second param is the anon func
app.listen(5000, (req, res) => {
  console.log("listening on port 5000...")
})
