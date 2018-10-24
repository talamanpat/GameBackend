var db=require('../dbconnection'); //reference of dbconnection.js 
const uuidv4 = require('uuid/v4');

var Friend={
    addFriends:function(u,fs,callback){
        for(let i=0;i<fs.length;i++){
            var f = fs[i];

            db.query("select * from friends where user_id = ? and friend_id = ?",[u,f], function(error, result) {
                if (error)
                    return callback(error,null);
                if (result.length == 0)
                {
                    db.query("Insert into friends (user_id,friend_id) values(?,?)",[u,f],function(error2,count){
                        if(error2)
                            return callback(error2,null);
                        else return;
                    });
                }
                return;
            });
            return this.getUserFriends(u,callback);
        }

    },
    getUserFriends:function(u,callback){
        return db.query("select f.friend_id id,u.name, MAX(s.score) highscore from friends f join users u on f.friend_id=u.id left join states s on f.friend_id=s.user_id where f.user_id=? group by f.friend_id",[u],callback);
    },
    deleteFriend:function(u,f,callback){
        return db.query("delete from friends where user_id=? and friend_id = ?",[u,f],callback);
    }
 
};
 module.exports=Friend;