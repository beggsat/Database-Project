CREATE TABLE manager (
  SSN varchar(11) PRIMARY KEY,
  employeeName varchar(256),
  contractType varchar(256),
  fullTime BOOL,
  phone varchar(12),
  address TEXT,
  pay DECIMAL(38,4),
  FOREIGN KEY (SSN) REFERENCES employee(SSN)
);
