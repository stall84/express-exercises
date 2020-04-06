const express = require('express');
const fs = require('fs');
const app = express();



app.listen(3003, () => {
    console.log('Your Server is running on port 3003');
});

app.get('/', (req,res) => {
    res.send('Welcome to the website of your wildest dog-pic dreams');
});

app.get('/files', (req,res) => {
    
    res.send('Attempting to get you a random dog image');
    console.log('Got a GET request at /files');
});

app.get('/files/rando', (req,res,next) => {
    next(fs.readdir('./public/images', (err,files) => {
        if (err) {
            console.log(`oopsie-woopsie, an error occurred: ${err}`);
            return;
        }
        
        res.json({'status': 'ok', 'message': __dirname + '/' + files[3]});
        console.log(files);
        
    }));
});
 

app.use(express.static(__dirname + '/public'));



