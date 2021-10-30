--
-- Creating database structure
--
CREATE SCHEMA storedb; -- Creo la base de datos

USE storedb;-- Uso la base de datos

--
-- Table structure for table `users`
--
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    user_avatar TEXT,    
    user_type VARCHAR(100)
);

--
-- Table structure for table `Shop_carts`
--
CREATE TABLE Shop_carts(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    price INT,
    user_id INT,-- FOREIGN KEY REFERENCES Users(id),
    crated_at DATETIME, -- Fecha de inicio del carrito.
    buy_date DATETIME, -- Fecha de compra.
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)

);
--
-- Table structure for table 'Available_stocks`
--
CREATE TABLE Available_stocks(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    small INT,
    medium INT,
    large INT,
    extra_large INT
);
--
-- Table structure for table `Products`
--
CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    description TEXT,
    price INT,
    category VARCHAR(100),
    available_stock_id INT,
    FOREIGN KEY (available_stock_id) REFERENCES Available_stocks(id)
);
--
-- Table structure for table `Product_shop_carts`
--
CREATE TABLE Product_Shop_cart (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_id INT,
    shop_cart_id INT ,
    FOREIGN KEY(shop_cart_id) REFERENCES Shop_carts(id),
    FOREIGN KEY(product_id) REFERENCES Products(id)
);
--
-- Table structure for table `Product_images`
--
CREATE TABLE Product_images(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    image TEXT,
    product_id INT NOT NULL,
    FOREIGN KEY(product_id) REFERENCES Products(id)
);
