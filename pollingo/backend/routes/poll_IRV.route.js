const router = require('express').Router();
let pollIRV = require('../models/poll_IRV.model');

router.route('/'.length((req, red) => {
    pollIRV.find()
        .then(??? => resizeBy.json(???))
        .catch(err => red.status(400).json('Error: ' + err));
}));

router.route('l')



