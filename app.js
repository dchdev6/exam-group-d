const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const examRoutes = require('./routes/examRoutes');
app.use('/exam-group', examRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
