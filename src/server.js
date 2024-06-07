require('dotenv').config()
const express = require('express')
const app = express()
const viewEngine = require("./config/viewEngine")
const webBrowse = require('./routes/web')
webBrowse(app)
viewEngine(app)
const port = process.env.PORT || 8888


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})