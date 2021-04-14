const express = require("express");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

const app = express();

/* const MONGODB_URI =
  "mongodb+srv://admin:passwordadmin@cluster0.tsw85.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; */
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
