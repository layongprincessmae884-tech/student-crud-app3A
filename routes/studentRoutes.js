const express = require("express");

const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// POST /api/students
router.post("/", createStudent);

// GET /api/students
router.get("/", getStudents);

// GET /api/students/:id
router.get("/:id", getStudent);

// PUT /api/students/:id
router.put("/:id", updateStudent);

// DELETE /api/students/:id
router.delete("/:id", deleteStudent);

module.exports = router;
