const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000

//Router
const levelOneRoutes = require('./routes/level-1')
const levelTwoRoutes = require('./routes/level-2')
const levelThreeRoutes = require('./routes/level-3')
const levelFourRoutes = require('./routes/level-4')
const levelFiveRoutes = require('./routes/level-5')
const levelSixRoutes = require('./routes/level-6')

// view engine + public folder
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

const levelKeys = [
    "CTF[|/|1$3]",
    "CTF[90531653162858]",
    "CTF[havefun]",
    "CTF[01110011 01100001 01101000 01101001 01110100]",
    "CTF[UQ6rHtT]"
]

// ========== Routes ==========
app.get('/', (req, res)=>{
    res.render('index')
})

//  ========== LEVEL 1 ========== 
app.get('/9dolor3', levelOneRoutes)

//  ========== LEVEL 2 ========== 
app.get('/inc8idunt6', levelTwoRoutes)

//  ========== LEVEL 3 ========== 
app.get('/ull4amco', levelThreeRoutes)

//  ========== LEVEL 4 ========== 
app.get('/natus3', levelFourRoutes)

//  ========== LEVEL 5 ========== 
app.get('/opt8io0', levelFiveRoutes)

//  ========== END ========== 
app.get('/end-congrats', levelSixRoutes)


//=======================================================
app.get('*', (req, res)=>{
    res.render('404')
})
app.listen(PORT, console.log(`⚡ Live on port ${PORT}`))