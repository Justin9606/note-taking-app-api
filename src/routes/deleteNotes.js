const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.use(express.json());

router.delete("/:id", async (req, res) => {
  try {
    //find by id and delete
    const note = await Note.findByIdAndDelete(req.params.id);
    //validate
    if (note) {
      //send response with status code
      res.status(204).send(note);
    }
  } catch (err) {
    //catch if error occurs
    res.status(500).send(err.message);
  }
});

module.exports = router;
