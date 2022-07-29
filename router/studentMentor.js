const express = require("express");
const router = express.Router();
const studentMentorModule = require("../module/studentMentor")

// Basic CRUD Operations
router.get('/student/read', studentMentorModule.findStudent)
router.get('/mentor/read', studentMentorModule.findMentor)

// 1.
router.post('/createStudent', studentMentorModule.createStudent)

// 2.
router.post('/createMentor', studentMentorModule.createMentor)

// 3.
router.put('/updateMentor/:mentorId', studentMentorModule.updateMentor)

// 4.
router.put('/updateStudent/:studentId', studentMentorModule.updateStudent)

// 5.
router.get('/listStudNotMentor', studentMentorModule.listStudNotMentor)

// 6.
router.get('/listStudMentor', studentMentorModule.listStudMentor)

module.exports = router;