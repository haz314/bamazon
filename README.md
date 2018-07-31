# bamazon

Broke Man's Amazon is an Amazon-like storefront, which uses MySQL to house the store's inventory. The app takes in orders from customers and depletes stock from the store's inventory

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
Node.JS
Node Package Manager
    * mysql
    * inquirer
MySQL Environment
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone this repository to your machine

```
git clone <this-github-repository>
```

Install Node Modules

```
npm install mysql
npm install inquirer
```

Finish by setting up your SQL server, change SQL server settings in the bamazonCustomer.js to appropriate settings,
and populate the SQL table with the file provided

## Running the App

Run in CLI using:

```
node bamazonCustomer.js
```

### How to use it once it's running

The app will present the user with the store inventory and ask for an item ID and quantity to purchase and then output the results of the purchase.

```
$ node bamazonCustomer.js
connected as id 28
1 | PlayStation | Video Games | 399.99 | 15
2 | Xbox | Video Games | 499.99 | 10
3 | Nintendo | Video Games | 299.99 | 5
4 | Green Nike Hat | Clothing | 14.99 | 25
5 | Blue Nike Hat | Clothing | 14.99 | 15
6 | Purple Nike Hat | Clothing | 14.99 | 25
7 | Black Nike Hat | Clothing | 14.99 | 35
8 | Rocking Chair | Furniture | 149.95 | 5
9 | Corner Sofa | Furniture | 799.99 | 3
10 | Bananas | Food | 0.99 | 9001
-----------------------------------
? What is the id of the product you would like to purchase? 1
? How many of the product would you like to purchase? 1
-----------------------------------
You've purchased 1 PlayStation
Your total cost today is: $399.99
----------------------------------- 
```

## Author

* **Hazael Dominguez** - *Practice Project* - [haz314](https://github.com/haz314)

## License

This project is presented without license

## Acknowledgments

* Hat tip to W3C for all the SQL help
* Table output still very basic
