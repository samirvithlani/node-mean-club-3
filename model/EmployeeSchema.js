const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    department:[{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true,
    }],
})
module.exports = mongoose.model('Employee',employeeSchema)