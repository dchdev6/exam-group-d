let exams = [];

router.post("/exams", (req, res) => {
  const newExam = req.body;
  newExam.id = exams.length + 1;
  exams.push(newExam);
  res.status(201).json(newExam);
});
