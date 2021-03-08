CREATE TABLE dish (
    dishType TEXT,
    price DECIMAL(19, 4),
    cost DECIMAL(19,4),
    dateCreated TIMESTAMP,
    menuID NUMERIC,
    dishName VARCHAR(200) PRIMARY KEY,
    FOREIGN KEY (menuID) REFERENCES menu(id)
);