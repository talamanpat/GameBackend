var db=require('../dbconnection'); 
const uuidv4 = require('uuid/v4');

var State={
 
getAllStates:function(id, callback){
 
return db.query("Select * from states where user_id = ?",[id],callback);
 
},
 getStateById:function(id,callback){
return db.query("select * from states where id=?",[id],callback);
 },
 
 getStateByNumber:function(n,u,callback){
    return db.query("select * from states where gamesPlayed=? and user_id = ? ",[n, u],callback);
     },
getLastState:function(u,callback){
    return db.query("select * from states where user_id = ? order by gamesPlayed desc limit 1",[u],callback);
    },

 addState:function(s,callback){
     db.query("select * from states where user_id = ? order by states.gamesPlayed desc",[s.user_id], function(error, result) {
        if(error)
            return callback(error,result);
        s.gamesPlayed=(result.length > 0)?newGamesPlayed=result[0].gamesPlayed+1:1;
        s.id=uuidv4();
        db.query("Insert into states (id,gamesPlayed,score,user_id) values(?,?,?,?)",[s.id,s.gamesPlayed,s.score, s.user_id],function(error2,count){
            if(error2)
                return callback(error2,null);
            return db.query("select * from states where id = ?",[s.id],callback);
        });        
    });
 },

 deleteState:function(id,callback){
  return db.query("delete from states where id=?",[id],callback);
 },
 updateState:function(s,callback){
  return db.query("update states set score=? where Id=?",[s.score,s.id],callback);
 }
 
};
 module.exports=State;