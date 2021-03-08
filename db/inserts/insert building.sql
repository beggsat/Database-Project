ALTER TABLE building CHANGE TotalCost YearlyCost DECIMAL(38,4);

ALTER TABLE building
add column Zipcode INT(6);

INSERT INTO building (BuildingAddress, SquareFootage, Capacity, Rent, YearlyCost, RestaurantID, Zipcode) VALUES
('938 Ligula Street',4081,239,4574,54888, 1001, 31120),
('38998 In Avenue',6457,300,9510,114120, 1002, 31120),
('4424 Primis Rd.',1656,175,4830,57960, 1003, 31120),
('267 Consectetuer Street',2900,375,4500,54000, 1004, 32230),
('3815 Ipsum. St.',6797,420,7390,88680, 1005, 23220),
('4897 Purus, Rd.',5457,315,3851,46212, 1006, 23220),
('4361 At Avenue',2905,195,4085,49020, 1007, 23112),
('364 Fusce Rd.',9876,250,5466,65592, 1008, 32230),
('4458 Imperdiet Av.',3527,180,1500,18000, 1009, 23220),
('4186 Et St.',1900,87,950,11400, 1010, 23112);

INSERT INTO building (BuildingAddress, SquareFootage, Capacity, Rent, YearlyCost, RestaurantID, Zipcode) VALUES
('876 Macaroni St.',4500,190, 4000 , 48000, null, 32230),
('4134 Carbon St.',1900,87,950,11400, null, 23112);

