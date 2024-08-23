const mysql = require('mysql2');


//database configurations
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'training_module'
});

module.exports = pool.promise();
