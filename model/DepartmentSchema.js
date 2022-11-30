const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = Schema({

    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        null:false,
    },
    description:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('Department',departmentSchema)
