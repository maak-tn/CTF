const express = require('express')
const router = express.Router()

router.get('/ull4amco', (req, res)=>{
    res.render('ull4amco')
})
router.post('/ull4amco', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[2]) {
        res.redirect('/natus3')
    }else{
        res.redirect('/')
    }
})

module.exports = router