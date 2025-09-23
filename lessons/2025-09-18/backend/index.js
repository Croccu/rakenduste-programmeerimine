const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// Demo andmebaas mälus
let tasks = [
  { id: 1, title: "Buy milk", done: false },
  { id: 2, title: "Finish homework", done: true }
]
let nextId = 3

// Healthcheck
app.get('/', (req, res) => {
  res.send('Hello Rico & World!')
})

// CRUD endpointid: /api/tasks

// CREATE
app.post('/api/tasks', (req, res) => {
  const { title, done = false } = req.body
  if (!title) {
    return res.status(400).json({ error: "title required" })
  }
  const task = { id: nextId++, title, done: Boolean(done) }
  tasks.push(task)
  res.status(201).json(task)
})

// READ ALL
app.get('/api/tasks', (req, res) => {
  res.json(tasks)
})

// READ ONE
app.get('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = tasks.find(t => t.id === id)
  if (!task) return res.status(404).json({ error: "Not found" })
  res.json(task)
})

// UPDATE
app.put('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const idx = tasks.findIndex(t => t.id === id)
  if (idx === -1) return res.status(404).json({ error: "Not found" })

  const { title, done } = req.body
  if (typeof title !== 'string' || typeof done !== 'boolean') {
    return res.status(400).json({ error: "Need {title: string, done: boolean}" })
  }
  tasks[idx] = { id, title, done }
  res.json(tasks[idx])
})

// DELETE
app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  const before = tasks.length
  tasks = tasks.filter(t => t.id !== id)
  if (tasks.length === before) return res.status(404).json({ error: "Not found" })
  res.status(204).send()
})

/**
 * Route parameters näited
 */
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.json({
    userId: req.params.userId,
    bookId: req.params.bookId,
    example: "users/:userId/books/:bookId"
  })
})

app.get('/flights/:from-:to', (req, res) => {
  res.json({
    from: req.params.from,
    to: req.params.to,
    example: "flights/:from-:to"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
