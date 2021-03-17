const express = require('express')
const router = express.Router()

router.get('/opt8io0', (req, res)=>{
    res.render('opt8io0')
})
router.post('/opt8io0', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[4]) {
        res.redirect('/end-congrats')
    }else{
        res.redirect('/opt8io0')
    }
})

module.exports = router