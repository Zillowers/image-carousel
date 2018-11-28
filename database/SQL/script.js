const faker = require('faker');
const fs = require('fs');
const wstream = fs.createWriteStream('./../images2.tsv');

const randomNumGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fakeDataGenerator = (i) => {
  const homeUrls = ['https://s3-us-west-1.amazonaws.com/zillowhouses/House-In-Cliff-with-Pool.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/cliff-house-interior.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/front+view+housebythecliff-1024x608.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/interior+houseonthecliff.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg'];

  for (; i <= 10000000; i++) {
    let randomNum = randomNumGenerator(0, 4);
    let houseID = randomNumGenerator(1, 10000000);
    const imageUrl = homeUrls[randomNum];
    if (!wstream.write(imageUrl + '\t' + houseID + '\n')) {
      wstream.once('drain', () => {
        fakeDataGenerator(i + 1);
      });
      return;
    }
  }
  wstream.end();
};
fakeDataGenerator(1);