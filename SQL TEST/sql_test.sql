CREATE DATABASE `company_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE user (
    id INT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cultureID INT,
    deleted BIT DEFAULT 0,
    country VARCHAR(255),
    isRevokeAccess BIT DEFAULT 0,
    created DATETIME
);

INSERT INTO user (id, firstName, lastName, email, cultureID, deleted, country, isRevokeAccess, created) VALUES 
(1, 'Victor', 'Shevchenko', 'vs@gmail.com', 1033, 1, 'US', 0, '2011-04-05'),
(2, 'Oleksandr', 'Petrenko', 'op@gmail.com', 1034, 0, 'UA', 0, '2014-05-01'),
(3, 'Victor', 'Tarasenko', 'vt@gmail.com', 1033, 1, 'US', 1, '2015-07-03');


CREATE TABLE user_group (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    created DATETIME
);

INSERT INTO user_group (id, name, created) VALUES 
(10, 'Support', '2010-02-02'),
(14, 'TEST - dev team', '2013-05-06'),
(17, 'TEST-team', '2011-01-07');

CREATE TABLE groupMembership (
    id INT PRIMARY KEY,
    userID INT,
    groupID INT,
    created DATETIME
);

INSERT INTO groupMembership (id, userID, groupID, created) VALUES 
(110, 2, 10, '2010-02-02'),
(114, 1, 10, '2014-02-02'),
(115, 1, 17, '2011-05-02');

SELECT g.name 
FROM user_group g 
WHERE g.name LIKE 'TEST-%' 
AND g.id NOT IN (
    SELECT gm.groupID 
    FROM groupMembership gm
);

SELECT u.firstName, u.lastName 
FROM user u 
WHERE u.firstName = 'Victor' 
AND u.id NOT IN (
    SELECT gm.userID 
    FROM groupMembership gm 
    JOIN user_group g ON gm.groupID = g.id 
    WHERE g.name LIKE 'TEST-%'
);






