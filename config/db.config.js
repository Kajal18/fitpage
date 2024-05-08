'use strict';

const mysql = require('mysql2');

//local mysql db connection
const dbConn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'fitpage'
});
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;