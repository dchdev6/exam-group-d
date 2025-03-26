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
  
module.exports = router;
