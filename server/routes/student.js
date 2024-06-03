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

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params; // Correctly extract the id parameter
    const student = await Student.findByPk(id); // Use findByPk method

    if (!student) {
      return res.status(404).json({ error: "student not found" });
    }

    await student.destroy();
    res.status(200).json("success");
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "An error occurred while deleting the student" });
  }
});

router.put("/update", async (req, res) => {
  try {
    const {id, FullName,StudentPhone,StudentAddress } = req.body; // Correctly extract the quantity parameter
    const student = await Student.findByPk(id); // Use findByPk method
    
    if (!student) {
      return res.status(404).json({ error: "student not found" });
    }
    student.FullName = FullName;
    student.StudentPhone = StudentPhone;
    student.StudentAddress= StudentAddress;

    await student.save();
    res.status(200).json("success");
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "An error occurred while updating the student" });
  }
});

module.exports = router;
