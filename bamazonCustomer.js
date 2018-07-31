//NPM MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'bamazon_db'
});

//NPM

//NPM Inquirer
const inquirer = require('inquirer');

//MySQL queries
const sqlQuery = {
	wholeStore: "SELECT id, name, department, price, stock FROM product",
	userChoice: "SELECT id, name, department, price, stock FROM product WHERE id = ?",
	updateStore: "UPDATE product SET stock = stock - ? WHERE id = ?"
}

//Inquirer questions
const whatPurchase = [
	{
		type: 'input',
		message: 'What is the id of the product you would like to purchase?',
		name: 'id'
	},
	{
		type: 'input',
		message: 'How many of the product would you like to purchase?',
		name: 'quantity'
	}
];

//PROGRAM EXECUTES HERE
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	
	console.log('connected as id ' + connection.threadId);

	//Display the store
	queryWholeStore();
});

//Displays the store
function queryWholeStore() {
	connection.query(sqlQuery.wholeStore, function (err, results, fields) {
		//if there is an error throw it
		if (err) throw err;

		//Traverse through array of results from query
		for (var i = 0; i < results.length; i++) {
			console.log(
				results[i].id + " | " +
				results[i].name + " | " +
				results[i].department + " | " +
				results[i].price + " | " +
				results[i].stock);
		}
		console.log("-----------------------------------");
		askWhatPurchase();
	});
}

//Asks the user what they'd like to buy
function askWhatPurchase() {
	inquirer.prompt(whatPurchase).then(choice => {
		checkStock(choice.id, choice.quantity);
	});
}

//Checks database to see if user's item is in stock
function checkStock(id, quantity) {
	connection.query(sqlQuery.userChoice, id, function (err, res) {
		if (err) throw err;
		//Purchase product if in stock
		if (res[0].stock >= quantity) {
			purchaseProduct(id, quantity);
		} else {
			console.log("Insufficient quantity!");
		}
	});
}

//Updates the database to reflect a purchase
function purchaseProduct(id, quantity) {
	connection.query(sqlQuery.updateStore, [quantity, id], function (err, res) {
		if (err) throw err;
		connection.query(sqlQuery.userChoice, id, function (err, res) {
			if (err) throw err;
			let cost = parseFloat(quantity) * res[0].price;
			console.log("-----------------------------------");
			console.log("You've purchased " + quantity + " " + res[0].name);
			console.log("Your total cost today is: $" + cost);
			console.log("-----------------------------------");
			connection.end();
		});
	});
}
