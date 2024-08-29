const mysql = require('mysql')
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'users',
})
db.connect((err)=>{
    if(err){
        console.log("Database connection error :",err)
        process.exit(1)
    }
    console.log('MYSQL Connect')
})

module.exports = db

