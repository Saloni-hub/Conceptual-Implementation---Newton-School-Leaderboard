const { Schema } = require('mongoose');

const newtonLeadeboardSchema = new Schema({
    "name": Schema.Types.String,
    "username": Schema.Types.String,
    "global_rank": Schema.Types.Number,
    "country_rank": Schema.Types.Number,
    "rating": Schema.Types.String,
    "diff": Schema.Types.Number,
    "country_code": Schema.Types.String,
    "country": Schema.Types.String,
    "institution": Schema.Types.String,
    "institution_type": Schema.Types.String,
    "all_rating": Schema.Types.String,
    "user_gender": Schema.Types.String
   
})

exports.newtonLeadeboardSchema = newtonLeadeboardSchema;
