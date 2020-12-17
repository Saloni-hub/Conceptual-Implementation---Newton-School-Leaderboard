const { Schema } = require('mongoose');

const newtonLeadeboardSchema = new Schema({
    "name": String,
    "username": String,
    "global_rank": Number,
    "country_rank": Number,
    "rating": String,
    "diff": Number,
    "country_code": String,
    "country": String,
    "institution": String,
    "institution_type": String,
    "all_rating": String,
    "user_gender": String
   
})

exports.newtonLeadeboardSchema = newtonLeadeboardSchema;
