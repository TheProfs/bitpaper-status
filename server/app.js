'use strict'

const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()

app.set('port', (process.env.PORT || 5094))
app.use(compression())
app.use(express.static(path.join(__dirname, '../')))

app.listen(app.get('port'), () => {
  console.log(`Success! Server running at http://localhost:${app.get('port')}`)
})
