const multiplier = require('sian');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.post('/', function(req, res) {
    const data = req.body;
    const result = multiplier(data.a, data.b, data.c);
    res.status(200).send(result.toString());
});

app.listen(3000, function() {
    console.log('Ready');
});
