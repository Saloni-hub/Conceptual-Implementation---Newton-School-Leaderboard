const {newtonLeadeboardModel} = require('./connector')
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const posts = require('./data');
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)m
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// your code goes here
app.get('/topRankings', async(req,res) => {
    res.send(await newtonLeadeboardModel.find().skip(sanitize(req.query.offset, 0)).limit(sanitize(req.query.limit , 20)));
});

const sanitize = (value, defaultValue) => {
    if(value === null || value === undefined || isNaN(Number(value))) {
        return defaultValue;
    }
    return Number(value);
}


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
