const express = require('express')
const router = express.Router()
const levelKeys = require('../public/js/levelKeys')

router.get('/', (req, res)=>{
    res.render('ull4amco')
})
router.post('/', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[2]) {
        res.redirect('/natus3')
    }else{
        res.redirect('/')
    }
})

module.exports = router