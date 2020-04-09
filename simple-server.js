const express = require('express');

const app = express();

const port = process.env.PORT || 3000;



// create a 'test' array of test objects to use get method on with params down below
const objArr = [
    {case: 1, name: 'Jordan'},
    {case: 2, name: 'Peters'},
    {case: 3, name: 'Jefferson'}
];
// this is to allow json in body of request (mosh vid)
app.use(express.json());

app.listen(port, () => console.log('Your server is running on port: ' + port));

app.get('/',(req,res) => {
    res.send('Sup you trifllin mofo? You tryina GET something??');
});

// this route returns the specific obeject specified in the client's url "obj/xx". If the object/case doesn't exist a 404 is returned
app.get('/obj/:objID', (req,res) => {
    let currCase = objArr.find( (c) => c.case === parseInt(req.params.objID));
    // create if/error case if currCase doesn't exist (in objArr example if greater than 3) and return 404 code with statement
    if (!currCase) res.status(404).send('The course with given ID was not found');
    res.send(currCase);
});

app.post('/postcase', (req,res) => {
    const newcase = {
        case: objArr.length + 1,
        name: req.body.name
    }
    objArr.push(newcase);
    res.send(newcase);
});

app.get('/posted', (req,res) => {
    res.send(objArr);
    
})

