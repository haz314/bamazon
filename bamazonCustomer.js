//NPM MySQL 
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
});

//NPM Enquirer
const Enquirer = require('enquirer');
const enquirer = new Enquirer();

//MySQL queries
let wholeStore = 'SELECT ID, item_name, department, price, stock FROM product';

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " +
        connection.threadId);
    
    //query 
    queryAllProducts();
    
});

//Query the full store 
function queryAllProducts() {
    connection.query(wholeStore,
        function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            connection.end();
        });
}