const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect('mongodb+srv://abhishekpipriye2507:A62z5XJkkdnog6K0@cluster0.0ppsxar.mongodb.net/')
    .then(()=>{
        console.log("connected to DB")
    })
}

module.exports = connectToDB