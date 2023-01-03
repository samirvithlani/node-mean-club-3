const roleSchema = require('../model/RoleSchema');

const authenticate = async (req,res,next)=>{

    var auth = req.headers.auth
    roleSchema.findOne({_id:auth},(err,data)=>{

        if(err){
            return res.status(400).json({
                message: err.message
            })
        }
        else{
            console.log(data)
            if(data.role==="ADMIN"){
                return next()
            }
            else{
                return res.status(400).json({
                    message: "You are not authorized to access this route"
                })
            }
        }

    })





        //console.log(req.headers.auth)
        
// try{
//     if(auth ==="ADMIN"|| auth==="admin"){

//         return next()
//     }
//     else{
//         throw new Error("You are not authorized to access this route")
//     }

// }catch(err){

//     return res.status(400).json({
//         message: err.message
//     })

// }
}

module.exports = {authenticate}