var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: "bamazon"})

connection.connect(function (err){
    if (err) throw err;
    console.log("WELCOME TO BAMAZON!"); 
    runSearch();   
});


var runSearch = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }).then(function(answer) {
        console.log(answer);
        switch(answer.action.toLowerCase()) {
            case 'view products for sale':
                viewProducts();
            break;
            
            case 'view low inventory':
                viewLowInventory();
            break;
            
            case 'add to inventory':
                addToInventory();
            break;
            
            case 'add new product':
                addNewProduct();
            break;
        }
    })
};


function viewProducts(){
    connection.query("SELECT * FROM Bamazon.Products", function(err, res) {
        if(err) throw err;
        console.log(res);
    });
}

function viewLowInventory(){
    connection.query("SELECT * FROM Bamazon.Products where StockQuantity < 100;", function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    }

function addToInventory(){
    inquirer.prompt([{
        name: "product",
        type: "input",
        message: "itemId to add to"
    },{
        name: "quantity",
        type: "input",
        message: "quantity to add"
    }]).then(function(answer) {
        connection.query("UPDATE products SET StockQuantity = StockQuantity + " + answer.quantity + " WHERE itemId = " + answer.product + ";", function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    })
}

function addNewProduct(){
    inquirer.prompt([{
        name: "product",
        type: "input",
        message: "product to add to inventory"
    },{
        name: "departmentName",
        type: "input",
        message: "department"
    },{
        name: "price",
        type: "input",
        message: "price"
    },{
        name: "quantity",
        type: "input",
        message: "quantity to add"
    }]).then(function(answer) {
        connection.query("INSERT INTO `Bamazon`.`products` (`ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES ('" + answer.product + "', '" + answer.department + "', '" + answer.price + "', '" + answer.quantity + "');", function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    })
}