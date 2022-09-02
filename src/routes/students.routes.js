const express = require('express')
const mock = require('./../mock/mock')
const studentsRouter = express.Router()

studentsRouter.use(express.json())

studentsRouter.get('/', (req, res) => {
  res.status(200).send(mock.students)
})

studentsRouter.get('/:id', (req, res) => {
  const singleStudent = mock.students.find((student) => student.id === req.params.id)
  res.status(200).send(singleStudent)
})

studentsRouter.post('/register', (req, res) => {
  // mock.students.push(req.body) Need database
  console.log(req.body)
  res.status(200).send('registered')
})

module.exports = studentsRouter
