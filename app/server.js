const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('<ul><li>Azure</li><li>Violin</li></ul>All your base are belong to us!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
