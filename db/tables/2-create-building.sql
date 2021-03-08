create table IF NOT EXISTS building
(
    BuildingAddress varchar(255),
    SquareFootage DOUBLE,
    Capacity DOUBLE,
    Rent DECIMAL(38,4),
    YearlyCost DECIMAL(38,4),
    RestaurantID NUMERIC,
    Zipcode INT(6),
    PRIMARY KEY (BuildingAddress),
    FOREIGN KEY (RestaurantID) REFERENCES restaurant(restaurantID),
    CONSTRAINT building.ck_sqft_positive CHECK (building.SquareFootage >= 0),
    CONSTRAINT building.ck_capacity_positive CHECK (building.Capacity >= 0),
    CONSTRAINT building.ck_rent_positive CHECK (building.Rent >= 0),
    CONSTRAINT building.ck_totalcost_positive CHECK (building.TotalCost >= 0)
);
