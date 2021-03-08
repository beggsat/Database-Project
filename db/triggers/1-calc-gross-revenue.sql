DELIMITER $$
DROP TRIGGER IF EXISTS calcTotalProfit;
DROP TRIGGER IF EXISTS calcGrossRevenue;
CREATE TRIGGER calcGrossRevenue
AFTER INSERT
ON sale FOR EACH ROW
BEGIN

    DECLARE id_exists Boolean;
    SELECT 1
    INTO @id_exists
    FROM restaurant
    WHERE restaurant.restaurantID = NEW.restaurantID;

    IF @id_exists = 1
    THEN
        UPDATE restaurant
        SET grossRevenue = grossRevenue + ((SELECT price - cost
                                            FROM dish
                                            WHERE NEW.dishName = dishName))
        WHERE restaurantID = NEW.restaurantID;
    END IF;
END$$
 
DELIMITER ;