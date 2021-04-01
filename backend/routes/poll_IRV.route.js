const router = require('express').Router();
let PollIRV = require('../models/poll_IRV.model');

router.route('/').get((req, res) => {
    PollIRV.find()
        .then(pollIRV => res.json(pollIRV))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    // todo: replace var name with real name
    const username = req.body.username;
    const newUser = new PollIRV({username})

    newUser.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('Er' + err));
});

module.exports = router;



