const mysql = require('mysql2');


// connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //your Mysql password
        password: 'Octopus!24',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
