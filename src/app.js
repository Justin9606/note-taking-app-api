const express = require("express");
const mongoose = require("mongoose");

//routers
const getNotes = require("./routes/getNotes");
const postNote = require("./routes/postNote");
const putNotes = require("./routes/putNotes");
const deleteNotes = require("./routes/deleteNotes");

const app = express();
app.use(express.json());

const mongoDB = "mongodb://localhost:27017/note-taking-app";
mongoose
  .connect(mongoDB)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

app.use("/api/listOfNotes", getNotes);
app.use("/api/createNotes", postNote);
app.use("/api/updateNote", putNotes);
app.use("/api/deleteNote", deleteNotes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
