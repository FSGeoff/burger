const mysql = require("mysql");
const express = require("express");
const exphbs = require("express-handlebars");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "7Streams!",
	database: "burgers_db",
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	connection.end();
});
