const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'projeto_web'
});

module.exports = pool.promise();

