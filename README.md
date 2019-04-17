# Zillower Image Carousel

> Image Carousel similar to Zillow's. Client-Side Code: Michelle Lee, Server-Side Code: Andrew Johnson

## Related Projects

  - https://github.com/team-frontend/mortgage-calculator
  - https://github.com/team-frontend/detailed-part
  - https://github.com/team-frontend/nearby-homes

### Installing Dependencies

From within the root directory: 
[ ] npm install
[ ] npm run build to bundle webpack
[ ] mysql -u root
    ensure that the database img_carousel has been added. (you will most likely get a `CANNOT GET/` error at your localhost:3000 if you do not have the database set up and seeded)
[ ]npm run seed
[ ]npm run fake

### Public End Points (CRUD)
| Description                                    | Endpoint                     |
| ---------------------------------------------- | ---------------------------- |
| Add a new image of the currently listed home   | POST /images/:houseID/1      |
| Get current home's images                      | GET /images/:houseID/        |
| Replace a image under the currently listed home| PUT /images/:houseID/        |
| Delete info of home's Mortgage information     | DELETE /images/:houseID/     |


### POST /images/
Input:
{"imageUrl":"https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg, "houseID":34}

Output:
Image Added

### GET /images/:houseID
Input: {"houseID":34}

Output:
[{"imageUrl":"https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg"},]

### PUT /images/:houseID
Input: {"houseID":34, "imageUrl":"https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg"}

Output:
Succesfully Added

### DELETE /images/:houseID
Input: {"houseID": 34}
