const express = require('express')
const router = express.Router()

router.get('/9dolor3', (req, res)=>{
    return res.render('9dolor3')
})

    //router page
    router.get('/router-login-huawei', (req, res)=>{
        res.render('router-login')
    })
    router.post('/router-login-huawei', (req, res)=>{
        const username = req.body.username
        const password = req.body.password
        if (username === "user" && password === "user") {
            res.send('your key: CTF[|/|1$3], use <a href="/9dolor3">this</a> link to go back to the challenge page')
        }else{
            res.send('wrong, try again')
        }
    })

router.post('/9dolor3', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[0]) {
        res.redirect('/inc8idunt6')
    }else{
        res.redirect('/')
    }
})

module.exports = router