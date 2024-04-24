const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.use(express.json());

//getting all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//get single note by its id
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      res.send(note);
    } else {
      res.status(404).send("Note not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
