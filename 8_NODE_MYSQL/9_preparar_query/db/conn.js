const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'adriano',
    password: '1234',
    database: 'nodemysql1'
})

module.exports = pool
