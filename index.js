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

//schema to control type of data
const eventSchema = mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  cost: String,
  attendees: Array,
})

const Event = mongoose.model("Event", eventSchema) //create model from Schema

const newEvent = {
  title: "Do your part - Keep Boca Clean",
  date: "2021-08-02",
  description: "Cleaning up the trash and debris locally",
  cost: "Free",
  attendees: ["Chris", "Mia", "Noah", "Emily"],
}

//holds object and creates a class
function createEvent() {
  new Event(newEvent)
    .save()
    .then(() => console.log("event was saved!"))
    .catch((err) => console.error(err))
}

//creating a get route (reference newly created func)
app.get("/", (req, res) => {
  createEvent()
  res.send("Houston, we're good!")
})

//first param is the port, second param is the anon func
app.listen(5000, (req, res) => {
  console.log("listening on port 5000...")
})
