DROP KEYSPACE IF EXISTS images;
DROP TABLE IF EXISTS images.carousel;
CREATE KEYSPACE IF NOT EXISTS images WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE images;

CREATE TABLE IF NOT EXISTS images.carousel(
  id INT PRIMARY KEY,
  street text,
  imageUrl text
);

COPY images.carousel FROM '/Users/Phantogram/HRSF104/sdc/image-carousel/database/SQL/streetsImagesFile.tsv' WITH DELIMITER = '\t' AND HEADER = TRUE;