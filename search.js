var fs = require('fs');

var users = []
function readData(){

    let data = fs.readFileSync('users.json','utf8')
    users = JSON.parse(data)

}
function searchByName(name){

    readData()

    return users.filter((user)=>{

        return user.name == name
    })
}


module.exports = {searchByName}
