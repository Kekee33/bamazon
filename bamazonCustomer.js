var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("WELCOME TO BAMAZON!");
});

var productMenu = function() {

        connection.query("select * from products", function(err, products) {
            if (err) {
                return err;
            };

            for (var i = 0; i < products.length; i++) {
                console.log('Item ID: ' + products[i].item_id + ' --' + ' Department: ' + products[i].department_name + ' --' + ' Product: ' + products[i].product_name + ' --' + ' Price: $' + products[i].price);
                console.log('----------------------------------------------------------------------------');
            };
            //PROMPT USER TO GET ITEMS
            prompt.get(['item_id', 'quantity', 'Add_More (Y or N)'], function(err, result) {

                //Show what the user has picked and how many
                console.log('item_id: ' + result.item_id);
                console.log('quantity: ' + result.quantity);

                //Loop through all of the products to see if product is in stock
                //Confirm that the item is in stock
                for (var i = 0; i < products.length; i++) {
                    if (result.item_id == products[i].item_id) {
                        if (products[i].stock_quantity < result.quantity) {
                            console.log('Sorry, we are currently out of ' + ProductName + ' please choose another product!');
                        }

                        //Get the total for the products selected   
                        var orderTotal = (result.quantity * products[i].price);


                        //if item is in stock give the user their total
                        if (products[i].stock_quantity >= result.quantity) {
                            console.log('Order total: $' + orderTotal)
                        };
                    };


                };
                //UPDATE THE DATABASE
                function updateDB(data, quantity) {
                    var newStockQuantity = (products[i].stock_quantity - result.quantity);
                    connection.query("UPDATE products SET ? WHERE ?", [
                            { stock_quantity: newStockQuantity },
                            { item_id: data[0].item_id }
                        ],
                        function(error, data) {
                            if (error) throw error;
                        });
                }
            });
            });
        }
        //         connection.query("UPDATE products SET stock_quantity = " + newStockQuantity + "WHERE item_id = " + result.item_id + ";", function(err, products) {
        //             if (err) {
        //                 return console.log(err);
        //             }
        //             if (result.Add_More == 'Yes') {
        //                 productMenu();
        //             } else {
        //                 console.log('Thank you! Your order is complete. Have a wonderful day!!');
        //                 process.exit();
        //             };
        //         });



        //     });

        // });


        console.log('Please choose a product from the products displayed:  ');
        productMenu();