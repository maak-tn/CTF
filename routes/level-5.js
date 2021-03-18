const express = require('express')
const router = express.Router()
const levelKeys = require('../public/js/levelKeys')

router.get('/', (req, res)=>{
    res.render('opt8io0')
})
router.post('/', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[4]) {
        res.redirect('/end-congrats')
    }else{
        res.redirect('/opt8io0')
    }
})

module.exports = router