DROP DATABASE images;
CREATE DATABASE images;

\c images;

CREATE TABLE IF NOT EXISTS carousel (
  id SERIAL PRIMARY KEY,
  streetName TEXT,
  imageUrl TEXT,
  houseID INT
);

\COPY carousel FROM '/Users/Phantogram/HRSF104/sdc/image-carousel/database/combo.tsv' DELIMITER E'\t';

\copy carousel from '/tmp/combo.tsv' delimiters '\t';

CREATE TABLE carousel (
  id SERIAL PRIMARY KEY,
  streetName TEXT,
  imageUrl TEXT,
  houseID INT
);


psql --host=3.16.187.141 --port=5432 --username=postgres --password=sdcpsql --dbname=images



