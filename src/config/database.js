const mysql = require('mysql2');
require('dotenv').config()
// create the connection to database
const connection = mysql.createConnection({
    host:process.env.DBhost,
    port: process.env.DBport,
    user: process.env.DBuser,
    password: process.env.DBpassword,
    database: process.env.DBdatabase
});


module.exports = connection