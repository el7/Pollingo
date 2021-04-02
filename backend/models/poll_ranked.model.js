/* *****************************************
RANKED POLL DATA MODEL
*******************************************/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pollRankedSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
/*
    answer1: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },    
    answer2: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        minlength: 1
    },
    answer3: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        minlength: 1
    },
    answer4: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        minlength: 1
    },
    /**/
}, {
        timestamps: true,
});


const RankedPolltest = mongoose.model('rankedpolltest', pollRankedSchema)

module.exports = RankedPolltest;
