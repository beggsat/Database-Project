ALTER TABLE employee
ADD COLUMN schedule INT(8),
ADD COLUMN restaurantID NUMERIC NOT NULL,
ADD FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID);