var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'burgers_db'
	})
};


connection.connect(function(err) {
    if (err) {
        console.log("err connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
