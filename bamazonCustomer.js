var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: "bamazon"})
connection.connect(function (err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showAll();
});

function showAll(){
connection.query('SELECT * FROM products', function(err, res){
        if (err) throw err;
        console.log(res);
        });
}

function start() {
  inquirer    
    .prompt([
        {
            type:'input',
            name:'ID'
            message:'Enter the Item ID for the item you want to purchase?'
            validate: function(value) {
                if (isNaN(value) === false && value <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }    
        },{
            type:'input',
            name:'quantity'
            message:'How many do you want to purchase?'
            validate: function(value) {
                if (isNaN(value)) {
                    return false;
                } else {
                    return true;
                }
            }
        }

//         }],function(err,res){
//             if (err){
//                 console.log('prompt error');
//             };
//         });
// }
start();

