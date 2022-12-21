const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    password: "2694121Aa",
    host: "localhost",
    port: 5432,
    database: "ilacDB"
})

module.exports = pool