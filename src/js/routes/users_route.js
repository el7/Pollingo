
// todo: pretty sure this can be deleted, see /backend/routes

const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');

const User = require('../models/users');


router.post('/', (req, res, next) => {

    // new instance of model
    const user = new User({
        _id: new Mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        height: req.body.height,
        sex: req.body.sex
    });

    // turn into promise, log result to console/catch error
    user.save().then(result => {
            console.log(result);
    }).catch(err => console.log(err));

    res.status(201).json({
            message: 'handling POST reqs to /users',
            createdUser: user
    });

});

module.exports = router;