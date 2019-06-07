const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/product', (request, response) => {
    const statement = `select * from  Product`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

// router.post('/product', (request, response) => {
//     const Title = request.body.Title;
//     const Description = request.body.Description;
//     const Price = request.body.Price
//     const Rating = request.body.Rating;

//     const statement = `insert into product 
//         (Title, Description, Price, rating) values
//         ('${Title}', '${Description}', ${Price}, ${Rating})`;
//     const connection = db.connect();
//     connection.query(statement, (error, products) => {
//         connection.end();
//         response.send(utils.createResponse(error, products));
//     });
// });

// router.put('/product/:id', (request, response) => {
//     const id = request.params.id;
//     const Title = request.body.Title;
//     const Description = request.body.Description;
//     const Price = request.body.Price;
//     const Rating = request.body.Rating;
    
//     const statement = `
//         update product set 
//             Title = '${Title}',
//             Description = '${Description}',
//             Price = ${Price},
//             Rating = ${ratRng}
//         where id = ${id}`;
//     const connection = db.connect();
//     connection.query(statement, (error, products) => {
//         connection.end();
//         response.send(utils.createResponse(error, products));
//     });
// });

// router.delete('/product/:id', (request, response) => {
//     const id = request.params.id;
//     const statement = `delete  from  product where id = ${id}`;
//     const connection = db.connect();
//     connection.query(statement, (error, products) => {
//         connection.end();
//         response.send(utils.createResponse(error, products));
//     });
// });

module.exports = router;