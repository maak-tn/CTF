const express = require('express')
const router = express.Router()

router.get('/end-congrats', (req, res)=>{
    res.render('end-congrats')
})

module.exports = router