DROP DATABASE images;
CREATE DATABASE images;

\c images;

CREATE TABLE IF NOT EXISTS carousel(
  id SERIAL PRIMARY KEY,
  street VARCHAR(80),
  imageUrl TEXT
);

\COPY carousel FROM 'database/SQL/streetsImagesFile.tsv' DELIMITER E'\t';