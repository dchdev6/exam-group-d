const express = require('express');
const router = express.Router();

let exams = [];

router.get('/', (req, res) => {
    res.json({ message: "Group D API" });
});

router.post("/exams", (req, res) => {
  const newExam = req.body;
  newExam.id = exams.length + 1;
  exams.push(newExam);
  res.status(201).json(newExam);
});

router.get("/exams", (req, res) => {
    res.json([
      { id: 1, subject: "Math", date: "2025-04-01" },
      { id: 2, subject: "Science", date: "2025-04-02" }
    ]);
  });
  
router.put("/exams/:id", (req, res) => {
    const examId = parseInt(req.params.id);
    const updatedExam = req.body;
    let examFound = false;

    exams = exams.map(exam => {
        if (exam.id === examId) {
          examFound = true;
          return { ...exam, ...updatedExam };
        }
        return exam;
      });

    if (!examFound) {
        return res.status(404).json({ message: "Exam not found" });
      }
    
      res.json({ message: "Exam updated successfully" });

    });
    
module.exports = router;
