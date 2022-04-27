const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Youcan123[]',
    database: 'db_flaksip'
})

module.exports = db