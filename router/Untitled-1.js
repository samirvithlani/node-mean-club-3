const { db } = require("../../../model/UserSchema")

find all user who is married and have a child
findone  user having heighest saalry
findone  user having heighest saalry and married
provide array of user name and remove matching user name
findone one user having heighest saalry and married and having child
find user who is having lowest salary and not married
find oldest user who is not married




db.createCollection("user2")
db.user2.insert({name:"abc",age:20,married:false,salary:1000,child:false})
db.user2.insert({name:"aaa",age:30,married:true,salary:2000,child:true})
db.user2.insert({name:"ghi",age:40,married:true,salary:500,child:false})
db.user2.insert({name:"jkl",age:50,married:false,salary:45000,child:false})



db.user2.find({married:true,child:true})
















find one user who is married and have a child
//db.user1.find({married:true,child:true})
findone  user having heighest saalry
//db.user1.find().sort({salary:-1}).limit(1)
findone  user having heighest saalry and married
//db.user1.find({married:true}).sort({salary:-1}).limit(1)
provide array of user name and remove matching user name
//db.user1.find({name:{$nin:["abc","ghi"]}})
findone all user having heighest saalry and married and having child
//db.user1.find({married:true,child:true}).sort({salary:-1}).limit(1)
find user who is having lowest salary and not married
//db.user1.find({married:false}).sort({salary:1}).limit(1)
find oldest user who is not married
//db.user1.find({married:false}).sort({age:-1}).limit(1)

