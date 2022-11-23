var http = require('http');
var fh = require('./fileHandling/emp');
//fh.writeData();
//fh.readData()
//fh.appendData()
//fh.removeFile()
fh.creatFolde()
fh.copyFile()
fh.writeJson()
fh.readJson()


//const name = require('./users')
//var sum = require('./users')
//var user = require('./users')
//console.log(sum(12,2))
//console.log(user)
// var obj = require('./users')
// console.log(obj.name)
// console.log(obj.sum(12,2))
// console.log(obj.user.name)
// console.log(obj.sqrt(12))
var PORT = 3000
var server = http.createServer()
server.listen(PORT,()=>{
    console.log("server is running on port ",PORT)
})