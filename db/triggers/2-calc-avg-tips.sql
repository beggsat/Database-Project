DELIMITER $$

CREATE TRIGGER calcAvgTips
AFTER INSERT
ON sale FOR EACH ROW
BEGIN
    UPDATE server
    SET avgTips = (SELECT AVG(tip) FROM sale
                   WHERE server.SSN = sale.empId)
    WHERE SSN = NEW.empId;
END$$

DELIMITER ;