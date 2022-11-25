const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userSchema = require('./model/UserSchema')

const user = require('./router/userRouter');
app.use('/user',user);


//create server using express

var search = require('./search');

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

//db connection
mongoose.connect("mongodb://localhost:27017/club2",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected to DB")
    }
}
);



