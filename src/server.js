const express = require("express")
const app = express();

const dotenv = require("dotenv");
dotenv.config()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

const viewEngine = require("./config/viewEngine")
viewEngine(app)


const webBrowse = require("./routes/pages")
app.get('/',webBrowse)
app.get('/register',webBrowse)

app.listen(port,hostname, () => {
    console.log(`Example app listening on port: ${port}, hostname: ${hostname} `)
  })
