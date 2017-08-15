var mysql = require("mysql");

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

