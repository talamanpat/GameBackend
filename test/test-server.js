var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var randomstring = require("randomstring");

chai.use(chaiHttp);

describe('Tests', function() {
  
  var u1='';
  var u2='';

  
    before('should add a users on /user POST', function(done) {
      //first call to the mysql server, giving sometimes more timeout for the first network routing and connection
      this.timeout(3000);
      chai.request(server)
        .post('/user')
        .send({
          "name": "Test"+randomstring.generate(7)
          })
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.have.property('id');
          res.body.should.have.property('name');
          u1=res.body.id;
          
          chai.request(server)
          .post('/user')
          .send({
            "name": "Test"+randomstring.generate(7)
            })
          .end(function(err, res){
            res.should.have.status(200);
            u2=res.body.id;
            done();
            }); 
        });
    });

    it('should list ALL users on /user GET', function(done) {
        chai.request(server)
          .get('/user')
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.property('users');
            done();
          });
      });

    it('should list a SINGLE user on /user/<id> GET', function(done) {
        chai.request(server)
          .get('/user/'+u1)
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });



    it('should add a SINGLE state on /user/<userid>/state PUT', function(done) {
      chai.request(server)
        .put('/user/'+u1+'/state')
        .send({
          "gamesPlayed": 2,
            "score": 950
            })
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });
  
    it('should get a SINGLE and LAST state on /user/<userid>/state GET', function(done) {
        chai.request(server)
          .get('/user/'+u1+'/state')
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });

    it('should add a SINGLE friend on /user/<userid>/friends PUT', function(done) {
        chai.request(server)
          .put('/user/'+u1+'/friends')
          .send({
            "friends": [u2]
            })
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.property('friends');
            done();
          });
      });
    
    //GET /user/<userid>/friends
    it('should get all user friends on /user/<userid>/friends GET', function(done) {
        chai.request(server)
          .get('/user/'+u1+'/friends')
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.property('friends');
            done();
          });
      });

      after('should clean test data /user/clean POST', function(done) {
        this.timeout(15000);
        chai.request(server)
          .post('/user/clean')
          .send([u1,u2])
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });

});

