require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
//const uri = process.env.MONGODB_URI;

const app = express();

app.use(express.json());
app.use(authRoutes);

const uri =
  "mongodb+srv://admin:passwordadmin@cluster0.tsw85.mongodb.net/CelestialWeather?retryWrites=true&w=majority";
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
