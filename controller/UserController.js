const { model } = require('mongoose')
const userSchema = require('../model/UserSchema')

exports.addUser = (req,res)=>{

        const user = new userSchema(req.body)
        user.save((err,data)=>{
            if(err){
                res.status(500).json({
                    message:err.message || "Some error occured while creating a user"

                })
            }
            else{
                res.status(200).json({
                    message:"User created successfully",
                    data:data
                })
            }
        })

}

module.exports.getAllRecord = (req,res)=>{

    userSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while retrieving users"

            })
        }
        else{
            res.status(200).json({
                message:"Users retrieved successfully",
                data:data
            })
        }
    })
    
}

module.exports.getRecordById = (req,res)=>{

    const id = req.params.id;
    userSchema.findById(id,(err,data)=>{

        if(err){
            res.status(404).json({
                message:"User not found with id "+id
            })

        }
        else{
            res.status(200).json({
                message:"User retrieved successfully",
                data:data
            })
        }


    })

}
module.exports.delteUser = (req,res)=>{
    const id = req.params.id;
    userSchema.findByIdAndRemove(id,(err,data)=>{

        if(err){
            res.status(404).json({
                message:"User not found with id "+id

            })
        }
        else{
            res.status(204).json({
                message:"User deleted successfully",
            })
        }
    })
}

module.exports.updateUser = (req,res)=>{
    console.log("-------",req.params.id)    
        const id = req.params.id;
    userSchema.findByIdAndUpdate(id,req.body,(err,data)=>{

        if(err){
            res.status(404).json({
                message:"User not found with id "+id

            })
        }
        else{
            res.status(200).json({
                message:"User updated successfully",
                data:data
            })
        }

    })
}

