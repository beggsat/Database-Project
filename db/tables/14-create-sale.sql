CREATE TABLE IF NOT EXISTS sale (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    tip DECIMAL(19,4),
    timeServed TIMESTAMP,
    empId VARCHAR(11) NOT NULL,
    dishName VARCHAR(200) NOT NULL,
    restaurantID DECIMAL(10) NOT NULL,
    FOREIGN KEY (empId) REFERENCES server(SSN),
    FOREIGN KEY (dishName) REFERENCES dish(dishName),
    FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID)
);