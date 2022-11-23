const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//create server using express

var search = require('./search');

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.get('/user',(req,res)=>{

    //res.send("Hello World")
    //res.status(200).send("Hello World")
    res.json({
        message:"Hello World"
    })
})
app.post('/user',(req,res)=>{


    res.send("data added...")
    console.log(req.body.name)
})
app.delete('/user/:id',(req,res)=>{


    //id url -->
    var id= req.params.id
    try{
        if(id==1){

            throw new Error("id is not valid...")
        }
        else{
            res.status(204).send()
        }

    }catch(err){

        res.status(400).send(err.message)
    }


})

app.put('/user/:id',(req,res)=>{


    var id = req.params.id
    var user = req.body

    res.json({
        id:id,
        message:"data updated...",
        data:user
    })

})

app.get('/user/:id',(req,res)=>{


    res.send(req.params.id)

})


app.get('/usersearch/:name',(req,res)=>{


    var filteredData = search.searchByName(req.params.name)
    try{

            if(filteredData.length==0){
                    
                    throw new Error("No data found...")
            }
            else{
                res.json({
                    message:"data found...",
                    data:filteredData
                })
            }

    }catch(err){

        res.status(400).send(err.message)
    }





})


