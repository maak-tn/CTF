const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000

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
app.get('/9dolor3', (req, res)=>{
    return res.render('9dolor3')
})

    //router page
    app.get('/router-login-huawei', (req, res)=>{
        res.render('router-login')
    })
    app.post('/router-login-submit', (req, res)=>{
        const username = req.body.username
        const password = req.body.password
        if (username === "user" && password === "user") {
            res.send('your key: CTF[|/|1$3], use <a href="/9dolor3">this</a> link to go back to the challenge page')
        }else{
            res.send('wrong, try again')
        }
    })

app.post('/check-level-01-key', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[0]) {
        res.redirect('/inc8idunt6')
    }else{
        res.redirect('/')
    }
})

//  ========== LEVEL 2 ========== 
app.get('/inc8idunt6', (req, res)=>{
    res.render('inc8idunt6')
})
app.post('/check-level-02-key', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[1]) {
        res.redirect('/ull4amco')
    }else{
        res.redirect('/')
    }
})
//  ========== LEVEL 3 ========== 
app.get('/ull4amco', (req, res)=>{
    res.render('ull4amco')
})
app.post('/check-level-03-key', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[2]) {
        res.redirect('/natus3')
    }else{
        res.redirect('/')
    }
})
//  ========== LEVEL 4 ========== 
app.get('/natus3', (req, res)=>{
    res.render('natus3')
})
    
   //Cows and bulls route
   // array containing all user's tries
   let allTries = []
   // the hidden number
   const hidden = "0215"
    app.get('/cows-and-bulls', (req, res)=>{
        res.render('cowsAndBulls', {numTries: allTries.length, allTries: allTries})
    })


    // each time a user submits a try
    app.post('/cows-and-bulls', (req, res)=>{
        // user's try
        const uTry = req.body.userTry
        //unless the user has less than 10 tries
        if(allTries.length != 10){
           //check for c & b
            let c = 0
            let b = 0
            for (let i = 0; i < 4; i++) {
                const elementUser = uTry[i];
                for (let j = 0; j < 4; j++) {
                    const elementHidden = hidden[j];
                    if (elementUser == elementHidden) {
                        if (i == j) {
                            b++
                        }else{
                            c++
                        }
                    }
                }
            }

           // objct with updated values
           let finalRes = {
               uTry: uTry,
               cows: c,
               bulls: b
           }
           // add the updated try into the array
            allTries.push(finalRes)
            if (b == 4) {
                // rerender page with updated values
                res.send('Congrats ! here\'s the key : 01110011 01100001 01101000 01101001 01110100<br><a href="/natus3">Back to Level 04</a>')
            }else{
                res.render('cowsAndBulls', {numTries: allTries.length, allTries: allTries})
            }
        }else{ // more than 10 tries
            // reset
            allTries = []
            // send  message
            res.send(`You only get 10 tries, please try again <a href="/cows-and-bulls">here</a>`)
        }
    })

app.post('/natus3', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[3]) {
        res.redirect('/opt8io0')
    }else{
        res.redirect('/natus3')
    }
})
//  ========== LEVEL 5 ========== 
app.get('/opt8io0', (req, res)=>{
    res.render('opt8io0')
})
app.post('/opt8io0', (req, res)=>{
    const userKey = req.body.key
    if (userKey === levelKeys[4]) {
        res.redirect('/end-congrats')
    }else{
        res.redirect('/opt8io0')
    }
})
//  ========== END ========== 
app.get('/end-congrats', (req, res)=>{
    res.render('end-congrats')
})

//=======================================================
app.get('*', (req, res)=>{
    res.render('404')
})
app.listen(PORT, console.log(`⚡ Live on port ${PORT}`))