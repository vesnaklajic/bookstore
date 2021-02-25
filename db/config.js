const mysql = require('mysql2'),
    config = require('../config/env');

const db = mysql.createPool({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;