const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();

const Item = require('../models/product');

// Handle incoming GET requests to /orders
/*
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});
*/
router.post('/', (req, res, next) => {

    /*
    const item = {
        itemId: req.body.productId,
        quantity: req.body.quantity
    };
    */

    const item = new Item({
        _id: new Mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        height: req.body.height,
        sex: req.body.sex
    });

    item.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));

    res.status(201).json({
        message: 'handling POST reqs to /products',
        createdItem: item
    });

});
/*
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});
*/
module.exports = router;