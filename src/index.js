
// const bodyParser = require("body-parser");
const express = require('express')
const app = express()
const port = 8080
const {newtonLeadeboardModel} = require('./connector')
// const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// your code goes here
app.get('/topRankings',async(req,res) => {
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
