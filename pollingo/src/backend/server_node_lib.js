
const http = require('http');   // create server
const https = require('https'); // parse urk
const url = require('url');     // send https requests

// todo setup env variable
const port = process.env.port || 3000; // environment vairable for PORT

// todo store ips in database instead of map
var ip_table = new Map();       // using map to store ip details instead of db. 
var choice_table = new Map();
var poll_table = new Map();

const app = http.createServer(async(req, res) => {

        // parse the incoming url
        const parsedURL = url.parse(req.url, true);

        // POST -- add new choice -- /api/pollingo/polls
        if (parsedURL.pathname === '/api/pollingo/poll' && req.method === 'POST') {
            // choice param
            if (!parsedURL.query.newchoice) {
                res.statusCode = 400;
                res.end("newchoice required in query");                
            } else {
//                res.end("here");
                handleAddChoice(parsedURL.query.newchoice,res);
            }            
        }

        // GET -- get choices -- /api/pollingo/show
        else if (parsedURL.pathname === '/api/pollingo/show' && req.method === 'GET'){
            handleShowChoice(res);
        }

});//End of create server.
app.listen(4000);


// function to handle update request
function handleAddChoice(choice, res){
    // todo replace with db quries
    updateChoiceTable(choice);

    res.end(JSON.stringify(choice_table.get(choice)));
}

function handleShowChoice(res){
    // set the header and status
    res.setHeader('content-type', 'Application/json');
    res.statusCode = 200;
    // create an array from the map 
    array = Array.from(choice_table, ([name, value]) => ({ name, value }));
    // send the response array
    res.end(JSON.stringify(array));
}


function updateChoiceTable(entry){
    // add the entry to table
    choice_table.set(entry.choice, {"choice":entry.choice});
}








