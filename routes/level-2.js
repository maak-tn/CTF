const express = require('express')
const router = express.Router()

router.get('/inc8idunt6', (req, res)=>{
    res.render('inc8idunt6')
})
router.post('/inc8idunt6', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[1]) {
        res.redirect('/ull4amco')
    }else{
        res.redirect('/')
    }
})

module.exports = router