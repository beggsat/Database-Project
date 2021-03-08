create table IF NOT EXISTS HoldingCompany
(
    Name   varchar(256),
    Address TEXT,
    TotalProfit DECIMAL(38,4),
    PRIMARY KEY (Name)
);
