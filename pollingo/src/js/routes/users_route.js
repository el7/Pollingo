const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');

const User = require('../models/users');

// Handle incoming GET requests to /orders
/*
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});
*/
router.post('/', (req, res, next) => {

    const user = new User({
        _id: new Mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        height: req.body.height,
        sex: req.body.sex
    });

    user
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res
        .status(201).json({
            message: 'handling POST reqs to /users',
            createdUser: user
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