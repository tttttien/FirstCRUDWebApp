const express = require('express');
const router = express.Router();
const { Student } = require('../models');

router.get('/', async (req, res) => {
  const listOfStudents = await Student.findAll();
  res.json(listOfStudents);
});

router.post("/", async (req, res) => {
  try {
    const post = req.body;
    console.log('Student model:', Student);  // Debug log
    console.log('Post data:', post);         // Debug log
    await Student.create(post);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
