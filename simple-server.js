const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
var newPost = "";

// create array of test objects to use get method on with params down below
const objArr = [
    {case: 1, name: 'Jordan'},
    {case: 2, name: 'Peters'},
    {case: 3, name: 'Jefferson'}
];

app.listen(port, () => console.log('Your server is running on port: ' + port));

app.get('/flerdle',(req,res) => {
    res.send('Sup you trifllin motherfucker? You tryina GET something??');
});

app.get('/obj/:objID', (req,res) => {
    let currCase = objArr.find( c => c.case === parseInt(req.params.objID));
    // create if/error case if currCase doesn't exist (in objArr example if greater than 3) and return 404 code with statement
    if (!currCase) res.status(404).send('The course with given ID was not found');
    res.send(currCase);
});

app.post('/post', (req,res) => {
    newPost += req;
    res.send('You added some shit-text to my server, bitch!');
});

app.get('/posted', (req,res) => {
    res.json(newPost);
    
})

