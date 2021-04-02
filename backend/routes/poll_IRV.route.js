const router = require('express').Router();
let PollIRV = require('../models/poll_IRV.model');

router.route('/').get((req, res) => {
    PollIRV.find()
        // pollIRV might be wrong here
        .then(pollIRV => res.json(pollIRV))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const question = req.body.question;
    const answer1 = req.body.answer1;
    const answer2 = req.body.answer2;
    const answer3 = req.body.answer3;
    const answer4 = req.body.answer4;    
    const newQuestion = new PollIRV({question, answer1, answer2, answer3, answer4});

    newQuestion.save()
        .then(() => res.json('New IRV question added'))
        .catch(err => res.status(400).json('Er' + err));
});

module.exports = router;



