const express = require('express')
const  {getLoginPage} = require('../controllers/homeController')
const router = express.Router()

const webBrowse = (app) => {
    router.get('/',getLoginPage )

    return app.use("/",router)
}

module.exports = webBrowse
