var express = require('express');
var router = express.Router();
var User=require('../models/User');
var State=require('../models/State');
var Friend=require('../models/Friend');


router.get('/:id?',function(req,res,next){

    if(req.params.id){

        User.getUserById(req.params.id,function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else{

                res.json(rows[0]);
            }
        });
    }
    else{

    User.getAllUsers(function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json({users:rows});
            }
        });
    }
});
router.post('/',function(req,res,next){

        User.addUser(req.body,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows[0]);              
            }
        });
});
router.post('/:id',function(req,res,next){
    User.deleteAll(req.body,function(err,count){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json(count);
        }
    });
});
router.delete('/:id',function(req,res,next){
    User.deleteUser(req.params.id,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }

    });
});

router.put('/:id',function(req,res,next){
    User.updateUser(req.params.id,req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.put('/:id/state',function(req,res,next){
    var s = {
        user_id:req.params.id,
        gamesPlayed:req.body.gamesPlayed,
        score: req.body.score
    } 
    State.addState(s,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows[0]);
        }
    });
});
router.get('/:id/state',function(req,res,next){

    State.getLastState(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows[0]);
        }
    });
});
router.put('/:id/friends',function(req,res,next){

    Friend.addFriends(req.params.id,req.body.friends,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({"friends":rows});
        }
    });
});
router.get('/:id/friends',function(req,res,next){

    Friend.getUserFriends(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({"friends":rows});
        }
    });
});
router.post('/clean',function(req,res,next){
    User.deleteAll(req.body,function(err,count){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json(count);
        }
    });
});
module.exports=router;