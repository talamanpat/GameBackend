var db=require('../dbconnection'); //reference of dbconnection.js 
const uuidv4 = require('uuid/v4');

var User={
 
getAllUsers:function(callback){
 
return db.query("Select * from users",callback);
 
},
 getUserById:function(id,callback){
return db.query("select * from users where id=?",[id],callback);
 },
 addUser:function(u,callback){


    db.query("select * from users where name = ?",[u.name], function(error, result) {
        if (result.length > 0) 
            return callback(error, "User name exists");
        else{
            u.id=uuidv4();
            db.query("Insert into users (id,name) values(?,?)",[u.id,u.name],function(error2,count){
                if(error2)
                    return callback(error2,null);
                return db.query("select * from users where id = ?",[u.id],callback);
            });
        }
    });
 
 },
 deleteUser:function(id,callback){
  return db.query("delete from users where id=?",[id],callback);
 },
 updateUser:function(id,u,callback){
  return db.query("update users set name=? where Id=?",[u.name,id],callback);
 }
 
};
 module.exports=User;