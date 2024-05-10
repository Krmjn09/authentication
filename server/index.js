const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./modals/Register");
const NotesModel = require("./modals/Notes");
const { json } = require("express");
const ProgressModel = require("./modals/Progress");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://chronicles:chronicles@cluster0.5e0b6tb.mongodb.net/register"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.post("/register", (req, res) => {
  RegisterModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.post("/addProgress", (req, res) => {
  Progress.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

// app.put("/updateProgress/:id", (req, res) => {
//   Progress.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then((data) => res.json(data))
//     .catch((err) => res.status(500).json(err));
// });

// app.delete("/deleteProgress/:id", (req, res) => {
//   Progress.findByIdAndDelete(req.params.id)
//     .then((data) => res.json(data))
//     .catch((err) => res.status(500).json(err));
// });
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email, password }).then((data) => {
    if (data) {
      if (data.password === password) {
        res.json("Login Successfull");
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("User not registered");
    }
  });
});

app.post("/addNotes", (req, res) => {
  NotesModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.get("/getNotes", (req, res) => {
  NotesModel.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.delete("/deleteNotes/:id", (req, res) => {
  NotesModel.findByIdAndDelete(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.put("/updateNotes/:id", (req, res) => {
  NotesModel.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
