const mysql = require('mysql')
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'email_verifications',
})
module.exports = db

