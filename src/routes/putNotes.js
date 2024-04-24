const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.use(express.json());

router.put("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body);

    if (updatedNote) {
      res.send(updatedNote);
    } else {
      res.status(404).send("Note not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
