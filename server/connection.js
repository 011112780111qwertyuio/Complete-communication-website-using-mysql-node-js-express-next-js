/* connection database */
const mysql  = require('mysql2');
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"database_schema",
});
//root
//ahmed16078
//admin
//12345678
/*-------------------- */
module.exports = db;
