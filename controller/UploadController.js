const multer = require('multer');
const path = require('path');
const uploadSchema = require('../model/UploadSchema');
//create storage engine
const sorage =multer.diskStorage({
    destination:"./uploads/",
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage:sorage,
    limits:{fileSize:9000000},
}).single('file');

exports.uploadFile = ((req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.json({
                message:err
            })
        }
        else{
            if(req.file == undefined){
                res.json({
                    message:"No file selected"
                })
            }
            else{
                console.log(path.relative(__dirname,`uploads/${req.file.filename}`))
                console.log(path.resolve(__dirname,`uploads/${req.file.filename}`))
                var upload1 = new uploadSchema({
                    name:"apple",
                    url:path.resolve(`uploads/${req.file.filename}`)
                })
                upload1.save((err,data)=>{
                    if(err){
                        res.json({
                            message:err
                        })
                    }
                    else{
                        res.json({
                            message:"File uploaded successfully.data saved to db",
                            data:data
                        })
                    }
                })
                
            }
        }
    })
})

exports.getAlldata = ((req,res)=>{

    uploadSchema.find((err,data)=>{
        if(err){
            res.json({
                message:err
            })
        }
        else{
            res.json({
                message:"All data",
                data:data
            })
        }
    })
})