const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./modals/Register");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://chronicles:chronicles@cluster0.5e0b6tb.mongodb.net/register"
);

app.post("/register", (req, res) => {
  RegisterModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

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
app.listen(3001, () => {
  console.log("server is running on port 3001");
});
