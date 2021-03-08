CREATE TABLE restaurant (
    restaurantID NUMERIC PRIMARY KEY,
    restaurantName varchar(256),
    openingDate DATE,
    totalProfit DECIMAL(38,4),
    grossRevenue DECIMAL(38,4),
    avgYearlyProfit DECIMAL(38,4),
    operatingCost DECIMAL(38,4),
    restaurantType TEXT,
    openingTime TIME,
    closingTime TIME
);
