const fs = require('fs');

function writeData(){

    fs.writeFileSync('./fileHandling/input.txt','Hello World')

}
function readData(){

    if(fs.existsSync('./fileHandling/input.txt')){
    var data = fs.readFileSync('./fileHandling/input.txt','utf8')
    }
    //console.log(data)
}

function appendData(){
    fs.appendFileSync('./fileHandling/input.txt',"amit")
}
function removeFile(){
    if(fs.existsSync('./fileHandling/input.txt')){
        fs.unlinkSync('./fileHandling/input.txt')
    }
}
function creatFolde(){

    if(!fs.existsSync('./fileHandling/newfolder')){
        fs.mkdirSync('./fileHandling/newfolder')
    }

}
function copyFile(){

    if(fs.existsSync('./fileHandling/input.txt')){

        if(fs.existsSync('./fileHandling/newfolder')){
            if(!fs.existsSync('./fileHandling/newfolder/input.txt')){
        fs.copyFileSync('./fileHandling/input.txt','./fileHandling/newfolder/input.txt')
            }
        }
    }

}

function writeJson(){

    var data ={
        name:"amit",
        age:23,
    }

    fs.writeFileSync('./fileHandling/userjson.json',JSON.stringify(data))
}
function readJson(){

    var userDtaa = fs.readFileSync('./fileHandling/userjson.json','utf8')
    console.log(JSON.parse(userDtaa))
}

module.exports = {writeData,readData,appendData,removeFile,creatFolde,copyFile,writeJson,readJson}