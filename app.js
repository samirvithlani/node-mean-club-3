const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const userSchema = require('./model/UserSchema')

const user = require('./router/userRouter');
const department  = require('./router/DepartmentRoutes');
const employee = require('./router/EmployeeRoutes');
const upload = require('./router/UploadRoutes');
app.use('/user',user);
app.use('/department',department);
app.use('/employee',employee);
app.use('/upload',upload);


//create server using express

var search = require('./search');

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

//db connection
mongoose.connect("mongodb://127.0.0.1:27017/club2",{
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



