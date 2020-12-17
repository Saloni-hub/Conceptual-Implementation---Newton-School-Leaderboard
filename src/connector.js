const mongoURI = "mongodb+srv://dbUser:12345@cluster0.rnxiv.mongodb.net/<NewtonLeaderboard>?retryWrites=true" + "/topRankings"

let mongoose = require('mongoose');
const { newtonLeadeboardSchema } = require('./schema')

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });




newtonLeadeboardModel = mongoose.model('leaderbord', newtonLeadeboardSchema)


exports.newtonLeadeboardModel = newtonLeadeboardModel;
