DROP DATABASE images;
CREATE DATABASE images;

\c images;

CREATE TABLE IF NOT EXISTS carousel (
  id SERIAL PRIMARY KEY,
  imageUrl TEXT,
  houseID INT
);

\COPY carousel FROM '/Users/Phantogram/HRSF104/sdc/image-carousel/database/images2.tsv' DELIMITER E'\t';