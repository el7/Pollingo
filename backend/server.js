const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

// middleware, process json
app.use(cors());
app.use(express.json());

// collect database uri, connect using mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

// 
const connection = mongoose.connection;
connection.once('open', () => { console.log("MongoDB database connection established successfully")})

// 
const pollIRVRouter = require('./routes/poll_IRV.route');
// const pollRankedRouter = require('./routes/poll_Ranked.route');

// 
// note: I think this should be /poll_IRV.route
app.use('/pollIRV', pollIRVRouter);
// app.use('/pollRanked', pollRankedRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

