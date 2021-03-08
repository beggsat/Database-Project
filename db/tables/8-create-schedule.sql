create table schedule
(
    ScheduleID   INT(8),
    ScheduleDate DATE,
    StartShift   TIME,
    EndShift     TIME,
    EmpId VARCHAR(11) NOT NULL,
    restaurantID NUMERIC NOT NULL,
    PRIMARY KEY (ScheduleID),
    FOREIGN KEY (empId) REFERENCES employee(SSN),
    FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID),
    CONSTRAINT ck_id_positive CHECK (ScheduleID >= 0)
);
