CREATE TABLE `products` (
  'item_id' INTEGER(11) NOT NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `department_name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(6,3) NOT NULL,
  `stock_quantity` INTEGER(11) NOT NULL,
  PRIMARY KEY (`ItemId`)
);


INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('1','recliner','furniture','250.00','25');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('2','laptop','electronics','750.00','15');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('3','cell phone','electronics','475.00','150');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('4','sectional','furniture','1250.00','75');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('5','lawn mower','lawn and garden','350.00','400');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('6','weed eater','lawn and garden','175.00','25');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('7','treadmill','exercise equipment','975.00','88');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('8','elliptical','exercise equipment','2250.00','4');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('9','jacuzzi tub','kitchen and bathrooms','1375.00','45');
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES ('10','bathroom vanity','kitchen and bathrooms','199.99','250');
