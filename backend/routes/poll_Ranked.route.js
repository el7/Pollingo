const router = require('express').Router();
let PollRanked = require('../models/poll_Ranked.model');

router.route('/').get((req, res) => {
    PollRanked.find()
        .then(pollRanked => res.json(pollRanked))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    // todo: replace var name with real name
    const username = req.body.username;
    const newUser = new PollRanked({username})

    newUser.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('Er' + err));
});

module.exports = router;



