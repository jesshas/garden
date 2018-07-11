const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/plant', (req, res) => {
    let plant = req.body.plant;
    console.log(plant);
    res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))