const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Yp040721",
    host: "localhost",
    port: 5432,
    database: ""
})