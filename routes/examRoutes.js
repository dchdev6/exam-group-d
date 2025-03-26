const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Group D API" });
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
