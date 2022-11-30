const { model } = require('mongoose');
const departmentSchema = require('../model/DepartmentSchema');

module.exports.addDepartment  = (req,res)=>{

    const department = new departmentSchema(req.body);
    department.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while creating a department"
            })
        }
        else{
            res.status(200).json({
                message:"Department created successfully",
                data:data
            })
        }
    })

}
module.exports.getDepartmentById = (req,res)=>{


    departmentSchema.findById(req.params.id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while retrieving department"
            })
        }
        else{
            res.status(200).json({
                message:"Department retrieved successfully",
                data:data
            })
        }

    })

}
