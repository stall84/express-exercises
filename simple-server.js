const express = require('express');

const app = express();

var newPost = "";


app.listen(3003, () => console.log('Your goddamn server is running on port 3003'));

app.get('/flerdle',(req,res) => {
    res.send('Sup you trifllin motherfucker? You tryina GET something??');
});

app.post('/post', (req,res) => {
    newPost += req;
    res.send('You added some shit-text to my server, bitch!');
});

app.get('/posted', (req,res) => {
    res.json(newPost);
    
})

