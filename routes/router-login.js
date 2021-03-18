const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('router-login')
})
router.post('/', (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    if (username === "user" && password === "user") {
        res.send('your key: CTF[|/|1$3], use <a href="/9dolor3">this</a> link to go back to the challenge page')
    }else{
        res.send('wrong, try again')
    }
})

module.exports = router