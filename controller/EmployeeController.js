const EmployeeSchema = require('../model/EmployeeSchema');


module.exports.getallEmployee = (req,res)=>{

    //use populate method to get the data from the other collection
    EmployeeSchema.find().populate('department').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while retrieving employee"
            })
        }
        else{
            res.status(200).json({
                message:"Employee retrieved successfully",
                data:data
            })
        }
    })
}

module.exports.addEmployee = (req,res)=>{
    
    const employee = new EmployeeSchema(req.body)
    employee.save((err,data)=>{

        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while creating a employee"
            })
        }
        else{
            res.status(200).json({
                message:"Employee created successfully",
                data:data
            })
        }

    })

}