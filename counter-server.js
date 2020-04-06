const express = require('express');
const app = express();


var counter = 0;

app.listen(3000, () => console.log('counter-server listening on localhost:3000'));

app.post('/increment', (req,res) => {
    counter ++;
    //res.send('Counter has been incremented by 1');
    res.json(counter);
})

app.post('/decrement', (req,res) => {
    counter --;
    //res.send('Counter has been decremented by 1');
    res.json(counter);
})

app.get('/value', (req,res) => {
    res.send('The current counter is: ' + counter)
});

