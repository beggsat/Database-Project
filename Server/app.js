require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

var cors = require('cors');

app.use(cors());
// app.route('/')
//   .get(function(req, res, next) {
//     connection.query(
//       "SELECT * FROM employee", req.params.SSN,
//       function(error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//       }
//     );
//   });


  // Query 1
 app.route('/getBelowAverage')
  .get(function(req, res, next) {
    connection.query(
      ("SELECT restaurantName AS 'Restaurant', grossRevenue 'Gross Revenue' FROM restaurant r JOIN building b on r.restaurantID = b.RestaurantID WHERE " + 
           "grossRevenue < (SELECT AVG(grossRevenue) FROM restaurant r JOIN building b on r.restaurantID = b.RestaurantID WHERE Zipcode = " + req.query.zip + ")"),
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


  // Query 2
  app.route('/getAvgGrossRevenue')
  .get(function(req, res, next) {
    connection.query(
      ("SELECT ROUND(avg(grossRevenue), 2) AS 'Average Gross Revenue' FROM restaurant NATURAL JOIN building WHERE Zipcode = " + req.query.zip),
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


  // Query 3
  app.route('/getRestaurantsForZipAndType')
  .get(function(req, res, next) {
    connection.query(
      ("SELECT restaurantName AS 'Restaurant Name', Zipcode AS 'ZIP' FROM restaurant JOIN building b ON restaurant.restaurantID = b.RestaurantID WHERE Zipcode = " + req.query.zip + " AND restaurantType LIKE '" + req.query.restaurantType + "'"),
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


  // Query 4
  app.route('/getDishesInTimeRange')
  .get(function(req, res, next) {
    connection.query(
      ("SELECT dishName AS 'Dish', timeServed AS 'Date/Time' FROM sale WHERE timeServed >= '" + req.query.startTime + "' AND timeServed <= '"+ req.query.endTime +"'"), req.params.SSN,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


  // Query 5
  app.route('/getEmptyBuildings')
  .get(function(req, res, next) {
    connection.query(
      ("SELECT BuildingAddress AS 'Address', Zipcode AS 'ZIP', SquareFootage AS 'Square Footage', Capacity AS 'Capacity', ROUND(YearlyCost,2) AS 'Yearly Cost' FROM building WHERE RestaurantID IS NULL"), req.params.SSN,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


  // Query 6
  app.route('/getAvgRentForZip')
  .get(function(req, res, next) {
    connection.query(
      ("SELECT ROUND(AVG(rent), 2) AS 'Average Rent' FROM building WHERE Zipcode = " + req.query.zip), req.params.SSN,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

  // Query 7
  app.route('/getAvgProfitForServers')
  .get(function(req, res, next) {
    connection.query(
      ("SELECT employeeName AS 'Employee', ROUND(SUM(price - cost), 2) AS 'Profit Generated' FROM server NATURAL JOIN sale JOIN dish d on sale.dishName = d.dishName WHERE server.ssn = sale.empId GROUP BY employeeName"), req.params.SSN,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

    // Query 8
    app.route('/getServerTipBelowAvg')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT employeeName AS 'Employee', avgTips AS 'Average Tips' FROM server WHERE avgTips < (SELECT AVG(avgTips) FROM server) GROUP BY employeeName, avgTips"), req.params.SSN,
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 9
    app.route('/getHighestProfitDishes')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT d.dishName, ROUND(SUM(price - cost), 2) AS profit FROM sale s JOIN dish d ON s.dishName = d.dishName JOIN menu m ON d.menuID = m.id GROUP BY d.dishName HAVING profit = (SELECT MAX(profit) FROM(SELECT d.dishName AS dishName, SUM(price - cost) AS profit FROM sale s JOIN dish d ON s.dishName = d.dishName JOIN menu m ON d.menuID = m.id GROUP BY d.dishName) AS pTable ORDER BY dishName)"), req.params.SSN,
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    //Query 10
    app.route('/getServersNotScheduled')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT employeeName, ScheduleDate, StartShift, EndShift FROM server JOIN schedule WHERE ScheduleDate != '" + req.query.scheduleDate +
              "' AND StartShift NOT BETWEEN '" + req.query.startTime + "' AND '" + req.query.endTime +
              "' AND EndShift NOT BETWEEN '" + req.query.startTime + "' AND '" + req.query.endTime +
              "' ORDER BY employeeName"), req.params.SSN,
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 11
    app.route('/getLocationCost')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT restaurantName AS 'Restaurant', BuildingAddress AS 'Address', ROUND(operatingCost, 2) AS 'Operating Cost' " +
              "FROM restaurant r JOIN building b ON r.restaurantID = b.RestaurantID " + 
              " WHERE b.Zipcode = " + req.query.zip),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 12
    app.route('/getRestaurantForTypeInArea')
    .get(function(req, res, next) {
      connection.query(
        ("Select restaurantName from restaurant natural join building as r1 WHERE zipcode = " +
         req.query.zip + " and restaurantType like '" + req.query.restaurantType + "'"),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 13
    app.route('/getEmployeesAtLocation')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT employeeName from employee WHERE restaurantID = " + req.query.restaurantID),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 14
    app.route('/getSalesForDay')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT tip, timeServed, empId, dishName, restaurantID FROM sale WHERE timeServed >= '" + req.query.startTime +
         "' AND timeServed < '" + req.query.endTime + 
         "' AND restaurantID = " + req.query.restaurantID),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 16
    app.route('/getProfitsForDishesMadeOnDate')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT timeServed AS 'Date/Time', dishName AS 'Dish', dateCreated AS 'Date Dish Created' " + 
         "FROM dish NATURAL JOIN sale " +
         "WHERE DATE(" + req.query.dateCreated + ") >= DATE(NOW() - INTERVAL 1 MONTH)"),
         function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });
    
    // Query 15
    app.route('/getRestaurantsOwnedByManager')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT restaurantName AS 'Restaurant', employeeName AS 'Manager' FROM restaurant r JOIN manager m " + 
         "ON r.managerID = m.ssn WHERE m.employeeName = '" + req.query.managerName+"'"),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 16
    app.route('/getDishProfitFromLastMonth')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT timeServed AS 'Date/Time', dishName AS 'Dish', dateCreated AS 'Date Dish Created'" +
         "FROM dish NATURAL JOIN sale" +
          "WHERE DATE(dateCreated) >= DATE(NOW() - INTERVAL 1 MONTH"),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 17
    app.route('/getProfitsForDishesMadeOnDate')
    .get(function(req, res, next) {
      connection.query(
        ("select ROUND(avg(Rent), 2) as 'Average Rent' " + 
         "from building " +
         "where Zipcode = " + req.query.zip),
         function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 18
      app.route('/getEntreeFromDinnerMenu')
      .get(function(req, res, next) {
        connection.query(
          ("SELECT dish.dishName AS 'Dish'" +
            "FROM dish NATURAL JOIN menu" +
            "WHERE menuType = 'Dinner' AND dishType='Entree'"),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 18
    app.route('/getProfitsForDishesMadeOnDate')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT dish.dishName AS 'Dish' " + 
         "FROM dish NATURAL JOIN menu " +
         "WHERE menuType = " + req.query.menuType + " AND dishType= " + req.query.dishType),
         function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 19
      app.route('/getEmployeeWeeklySchedule')
      .get(function(req, res, next) {
        connection.query(
          ("Select ScheduleDate, StartShift, EndShift, restaurantID " +
            "from schedule natural join employee as r1 " +
            "where employeeName like" + req.query.employeeName +
            " AND ScheduleDate >= "+ req.query.startDate +
            " AND ScheduleDate < " + req.query.endDate),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });

    // Query 19
    app.route('/getEmployeeWeeklySchedule')
    .get(function(req, res, next) {
      connection.query(
        ("Select ScheduleDate, StartShift, EndShift, restaurantID " +
          "from schedule natural join employee as r1 " +
          "where employeeName like " + req.query.employeeName +
          " AND ScheduleDate >= " + req.query.startDate +
          " AND ScheduleDate < " + req.query.endDate),
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

    // Query 20
    app.route('/getCapcityOfBuilding')
    .get(function(req, res, next) {
      connection.query(
        ("SELECT Capacity FROM building natural join restaurant as r1" +
          " where restaurantName like " + req.query.restaurantName),
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    });


app.get('/status', (req, res) => res.send('Yay its working'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 5000);
app.listen(5000);