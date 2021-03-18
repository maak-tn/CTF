const express = require('express')
const router = express.Router()

//Cows and bulls route
// array containing all user's tries
let allTries = []
// the hidden number
const hidden = "0215"
router.get('/', (req, res)=>{
    res.render('cowsAndBulls', {numTries: allTries.length, allTries: allTries})
})

// each time a user submits a try
router.post('/', (req, res)=>{
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

module.exports = router