const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.use(express.json());

//creating note
router.post("/", async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const savedNote = await note.save();
    res.send(savedNote);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
