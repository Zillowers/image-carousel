DROP KEYSPACE IF EXISTS test;
DROP TABLE IF EXISTS test.stuff;
CREATE KEYSPACE IF NOT EXISTS test WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE test;

CREATE TABLE IF NOT EXISTS test.stuff (
  id INT PRIMARY KEY,
  street text,
  imageUrl text,
  houseID INT
);

COPY test.stuff (id, street, imageUrl, houseID) FROM '/Users/Phantogram/HRSF104/sdc/image-carousel/database/SQL/newFile.tsv' WITH DELIMITER = '\t' AND HEADER = TRUE;


