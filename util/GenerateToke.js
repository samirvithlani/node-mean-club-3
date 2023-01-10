const jwt = require('jsonwebtoken');
var secret = "secret"


const generateToken = (user) => {

       
        jwt.sign(user,secret,{expiresIn: '1h',algorithm:'HS512'},(err,token)=>{
            if(err){
                console.log(err)
            }else{
                console.log(token)
            }
        })

}
generateToken({name:"John",age:20})
//generateToken({name:"",age:20})