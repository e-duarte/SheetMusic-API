require('dotenv').config()

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});


const port = process.env.PORT || process.env.LOCAL_PORT;
   
app.listen(port);