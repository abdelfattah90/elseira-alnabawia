const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
})

app.use((req, res) => {
  res.status(404).send('Page not found')
})

module.exports = app

if (require.main === module) {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}
