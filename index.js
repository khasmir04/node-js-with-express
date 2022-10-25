const express = require('express')
const app = express()

const studentsRouter = require('./src/routes/students.routes')

app.get('/', function (req, res) {
  res.status(200).send('Nothing to see here.')
})

app.use('/students', studentsRouter)

const PORT = 3030
app.listen(PORT, function () {
  console.log(`Server's now running on port ${PORT}`);
})

module.exports = app;
