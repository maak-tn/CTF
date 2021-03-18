const express = require('express')
const router = express.Router()
const levelKeys = require('../public/js/levelKeys')

router.get('/', (req, res)=>{
    res.render('inc8idunt6')
})
router.post('/', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[1]) {
        res.redirect('/ull4amco')
    }else{
        res.redirect('/')
    }
})

module.exports = router