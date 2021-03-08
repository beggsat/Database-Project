INSERT INTO restaurant (RESTAURANTID, RESTAURANTNAME, OPENINGDATE, TOTALPROFIT, GROSSREVENUE, AVGYEARLYPROFIT, OPERATINGCOST, RESTAURANTTYPE, OPENINGTIME, CLOSINGTIME) VALUES
(1001, 'Mellow Mushroom', '2001:08:15', 5000000, 4985000, 415416.667, 15000, 'American', '12:00', '22:30'),
(1002, 'Bar Taco', '2018:05:10', 10000000, 9919101, 826591.75, 80899, 'Mexican', '12:00', '22:30'),
(1003, 'Yard House', '2018:05:10', 100080000, 12826600, 1068883.33, 87253400, 'American', '12:00', '22:30'),
(1004, 'Peter Changs', '2015:12:22', 990000, 922600, 76883.33, 67400, 'Chinese', '12:00', '22:30'),
(1005, 'Maggianos', '2001:03:01', 19000000, 9709091, 809090.92, 9290909, 'Italian', '12:00', '22:30'),
(1006, 'Red Lobster', '1998:10:01', 51105000, 51096200, 425081.67, 8800, 'Seafood', '12:00', '22:30'),
(1007, 'Bjs Restaurant', '2004:07:21', 88000000, 87100000, 7258333.33, 900000, 'American', '12:00', '22:30'),
(1008, 'Cookout', '2011:11:11', 1111119, 1108619, 92384.92, 2500, 'Fast Food', '7:00', '2:00'),
(1009, 'Waffle House', '2017:09:27', 8000000, 7909899, 659158.25, 90101, 'Breakfast', '5:00', '2:00'),
(1010, 'Sushi Place', '2016:11:19', 50000, 30000, 2500, 20000, 'Asian', '17:00', '23:00');

INSERT INTO building (BuildingAddress, SquareFootage, Capacity, Rent, TotalCost) VALUES
('938 Ligula Street',40817,426,15749,40544),
('38998 In Avenue',64572,561,95100,18813),
('4424 Primis Rd.',16568,614,48312,59833),
('267 Consectetuer Street',28916,375,53838,38312),
('3815 Ipsum. St.',67977,536,23909,52948),
('4897 Purus, Rd.',8457,315,38511,4523),
('4361 At Avenue',29051,659,40858,11539),
('364 Fusce Rd.',98766,753,74664,94529),
('4458 Imperdiet Av.',35278,323,7390,15227),
('4186 Et St.',49012,923,66379,88172),
('508 Auctor. St.',68365,535,72435,27327),
('9315 Molestie Rd.',8828,268,56327,11963),
('8685 Adipiscing St.',16355,768,26229,56617),
('667 Dolor. Av.',59203,899,92965,61074);

Insert Into schedule (ScheduleID, ScheduleDate, StartShift, EndShift, empId, restaurantId) VALUES
(1,'2017:3:4','8:25','5:30' ),
(2,'2015:10:1','7:00','19:00' ),
(3,'2016:2:14','9:00','12:00' ),
(4,'2019:1:23','9:00','17:00' ),
(5,'2018:12:3','7:00','15:00' ),
(6,'2019:4:11','9:00','11:00' ),
(7,'2018:12:6', '8:00','13:30' ),
(8,'2017:10:17', '12:00','18:30' ),
(9,'2018:12:20', '9:00' ,'14:30' ),
(10,'2017:3:19', '9:30' ,'15:45' );


INSERT into employee (SSN, employeeName, contractType, fullTime, phone, address, pay, schedule) values
(263-96-8558,'Kellsie Vany', 'W-2', 0,4516124388,'8058 Havey Park',42.38,4),
(851-82-4583,'Giselbert Dun','W-2',1,2686585705,'70 Commercial Point',44.42,5),
(598-79-4573,'Kiley Hixson','W-2',0,4389732339,'7 David Alley',44.66,4),
(660-71-4984,'Cherry Riditch','1099',1,6125499117,'8 Ruskin Lane',7.53,9),
(481-71-2946,'Becky Aujean','W-2',1,6265349249,'87876 Melvin Drive',3.55,2),
(560-60-1828,'Guglielmo Edie','1099',1,5828502359,'66696 Sycamore Alley',53.11,2),
(458-74-3004,'Raimondo Liebmann','W-2',0,3451737969,'96 Fieldstone Alley',42.78,4),
(680-80-2667,'Ulrick Karpmann','W-2',0,5827679339,'5 Esker Avenue',92.12,10),
(843-25-4945,'Ashla Deeks','1099',0,8373709898,'01 Forest Dale Hill',40.56,1),
(447-01-1032,'Carlee Kenelin','1099',0,1086806048,'06 Cambridge Terrace',84.85,8),
(441-95-8841,'Stace Farris','W-2',1,3605742333,'045 Clarendon Pass',76.03,3),
(606-34-4032,'Alyce Byres','1099',1,6853711985,'340 Londonderry Terrace',30.89,3),
(556-15-3078,'Jessika Blonfield','1099',1,7692165748,'94 Laurel Trail',85.11,8),
(625-25-7198,'Odo Pascall','W-2',0,8026864940,'614 Montana Circle',88.53,6),
(714-89-4372,'Lou Durak','W-2',1,3647208399,'33 Mayer Alley',5.22,5);

INSERT into manager (SSN, employeeName, contractType, fullTime, phone, address, pay) values
(263-96-8558,'Kellsie Vany', 'W-2', 0,4516124388,'8058 Havey Park',42.38),
(851-82-4583,'Giselbert Dun','W-2',1,2686585705,'70 Commercial Point',44.42),
(598-79-4573,'Kiley Hixson','W-2',0,4389732339,'7 David Alley',44.66),
(625-25-7198,'Odo Pascall','W-2',0,8026864940,'614 Montana Circle',88.53),
(714-89-4372,'Lou Durak','W-2',1,3647208399,'33 Mayer Alley',5.22);

INSERT into server (SSN, employeeName, contractType, fullTime, phone, address, pay, avgTips, salesPerHour) values
(660-71-4984,'Cherry Riditch','1099',1,6125499117,'8 Ruskin Lane',7.53, 55.00, 22),
(481-71-2946,'Becky Aujean','W-2',1,6265349249,'87876 Melvin Drive',9.55, 20.00, 17),
(560-60-1828,'Guglielmo Edie','1099',1,5828502359,'66696 Sycamore Alley',13.11,28.00, 10),
(458-74-3004,'Raimondo Liebmann','W-2',0,3451737969,'96 Fieldstone Alley',12.78, 7, 1),
(680-80-2667,'Ulrick Karpmann','W-2',0,5827679339,'5 Esker Avenue',7.12, 25.00, 5),
(843-25-4945,'Ashla Deeks','1099',0,8373709898,'01 Forest Dale Hill',12.56,16.75, 8),
(447-01-1032,'Carlee Kenelin','1099',0,1086806048,'06 Cambridge Terrace',14.85,18.50, 8),
(441-95-8841,'Stace Farris','W-2',1,3605742333,'045 Clarendon Pass',6.03,36.00, 7),
(606-34-4032,'Alyce Byres','1099',1,6853711985,'340 Londonderry Terrace',30.89,30.50, 6),
(556-15-3078,'Jessika Blonfield','1099',1,7692165748,'94 Laurel Trail',11.11,18.00, 5);

INSERT menu (menuType, id) VALUES
('Dinner', 1),
('Breakfast', 2),
('Kids', 3),
('Lunch', 4),
('Lunch', 5),
('Kids', 6),
('Dinner', 7),
('Breakfast', 8),
('Dinner', 9),
('Breakfast', 10);
