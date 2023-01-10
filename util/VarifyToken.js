const jwt = require('jsonwebtoken');
var secret = "secret"

const verifyToken = (token)=>{

    jwt.verify(token,secret,(err,decoded)=>{
        if(err){
            console.log(err)
        }else{
            console.log(decoded)
        }
    })

}
verifyToken("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFnZSI6MjAsImlhdCI6MTY3MzM1NTg1NSwiZXhwIjoxNjczMzU5NDU1fQ.NEV-9x74iRJwgkYIC5Wf5ljndmkUt0aGNsVZJNyA3oEAB-61Cmu_147vP5Av7Pu1eWd8hVH1pcABbeenGTJO9A")
