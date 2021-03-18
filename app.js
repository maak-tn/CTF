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
const routerLoginRoute = require('./routes/router-login')
const cowsAndBullsRoute = require('./routes/cows-and-bulls')

// view engine + public folder
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

// ========== Routes ==========
app.get('/', (req, res)=>{
    res.render('index')
})

//  ========== LEVEL 1 ========== 
app.use('/9dolor3', levelOneRoutes)
app.use('/router-login-huawei', routerLoginRoute)

//  ========== LEVEL 2 ========== 
app.use('/inc8idunt6', levelTwoRoutes)

//  ========== LEVEL 3 ========== 
app.use('/ull4amco', levelThreeRoutes)

//  ========== LEVEL 4 ========== 
app.use('/natus3', levelFourRoutes)
app.use('/cows-and-bulls', cowsAndBullsRoute)

//  ========== LEVEL 5 ========== 
app.use('/opt8io0', levelFiveRoutes)

//  ========== END ========== 
app.use('/end-congrats', levelSixRoutes)


//=======================================================
app.get('*', (req, res)=>{
    res.render('404')
})
app.listen(PORT, console.log(`⚡ Live on port ${PORT}`))