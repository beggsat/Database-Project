CREATE TABLE menu (
    menuType TEXT,
    restaurantID NUMERIC,
    id NUMERIC PRIMARY KEY,
    FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID)
);