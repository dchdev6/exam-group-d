const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Group D API" });
});

router.get("/exams", (req, res) => {
    res.json([
      { id: 1, subject: "Math", date: "2025-04-01" },
      { id: 2, subject: "Science", date: "2025-04-02" }
    ]);
  });
  
module.exports = router;
