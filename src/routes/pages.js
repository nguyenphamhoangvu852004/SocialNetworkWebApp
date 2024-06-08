const express = require("express")

const router = express.Router();


router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/register',(req,res)=>{
    res.render('registrationPage')
})



module.exports = router;