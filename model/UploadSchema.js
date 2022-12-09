const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    name: {
        type: String,
    },
    url:{
        type:String
    }
})

module.exports = mongoose.model('Upload', uploadSchema);