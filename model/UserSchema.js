const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const objectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }

})
//export
module.exports = mongoose.model('User',userSchema)