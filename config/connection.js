var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("err connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
