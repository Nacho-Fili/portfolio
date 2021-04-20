const mysql = require('mysql')

const connectionConfig = {
    host:       process.env.HOST,        
    user:       process.env.USER,
    password:   process.env.DB_PASSWORD,
    database:   process.env.DATABASE,
    port:       process.env.DATABASE_PORT
}

module.exports = {
    connectionConfig
}