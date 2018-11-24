DROP DATABASE test;
CREATE DATABASE test;

\c test;

CREATE TABLE IF NOT EXISTS carousel(
  id SERIAL PRIMARY KEY,
  street VARCHAR(80),
  imageUrl TEXT,
  houseID INT
);

\COPY carousel FROM 'newFile.tsv' DELIMITER E'\t';