var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'sybogame',
 password:'sybogame',
 database:'sybogamedb'
 
});
 module.exports=connection;