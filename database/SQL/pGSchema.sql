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