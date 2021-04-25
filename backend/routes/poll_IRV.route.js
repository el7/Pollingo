
const router = require('express').Router();
let PollIRV = require('../models/poll_IRV.model');

// obtain all IRV Poll items
// accepts GET req on /
router.route('/').get((req, res) => {
    PollIRV.find()
        // pollIRV might be wrong here
        .then(pollIRV => res.json(pollIRV))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add new IRV Poll item
// accepts POST req on /
router.route('/').post((req, res) => {
    const question = req.body.question;
    const answer1 = req.body.answer1;
    const answer2 = req.body.answer2;
    const answer3 = req.body.answer3;
    const answer4 = req.body.answer4;    
    const newQuestion = new PollIRV({question, answer1, answer2, answer3, answer4});

    newQuestion.save()
        .then(() => res.json('New IRV question added'))
        .catch(err => res.status(400).json('Error' + err));
});

// obtain an IRV Poll item
// accepts GET req on /:id
router.route('/:id').get((req, res) => {
    PollIRV.findById(req.params.id)
      .then(pollIRV => res.json(pollIRV))
      .catch(err => res.status(400).json('Error: ' + err));
});

// obtain an IRV Poll item
// accepts GET req on /:id
router.route('/:id').get((req, res) => {
    PollIRV.findById(req.params.id)
      .then(pollIRV => res.json(pollIRV))
      .catch(err => res.status(400).json('Error: ' + err));
});

// delete an IRV Poll item
// accepts DELETE req on /:id
router.route('/:id').delete((req, res) => {
    PollIRV.findByIdAndDelete(req.params.id)
      .then(pollIRV => res.json("pollIRV Deleted"))
      .catch(err => res.status(400).json('Error: ' + err));
});

// update an IRV Poll item
// accepts POST req on /update/:id
router.route('/update/:id').post((req, res) => {
    PollIRV.findById(req.params.id)
      .then(pollIRV => {
        pollIRV.question = req.body.question;
        pollIRV.answer1 = req.body.answer1;
        pollIRV.answer2 = req.body.answer2;
        pollIRV.answer3 = req.body.answer3;
        pollIRV.answer4 = req.body.answer4;

        pollIRV.save()
            .then(() => res.json('PollIRV updated'))
            .catch(err => res.status(400).json('Error: ' + err));
      })        
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
