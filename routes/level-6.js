const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('end-congrats')
})

module.exports = router