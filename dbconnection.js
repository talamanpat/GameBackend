var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'db4free.net',
 user:'sybogame',
 password:'SYBOGame123456',
 database:'sybogamedb'
 
});
 module.exports=connection;