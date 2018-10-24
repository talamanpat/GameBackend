var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
    var u1='c3901c85-f94e-4d34-80f3-767a07fb331a';
    var u2='d27792de-fc62-464b-b315-4fdcb36a3dc8';

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
    it('should add a SINGLE user on /user POST', function(done) {
        chai.request(server)
          .post('/user')
          .send({
            "name": "TestTalaman"
            })
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });


    it('should add a SINGLE state on /user/<userid>/state PUT', function(done) {
      chai.request(server)
        .put('/user/'+u1+'/state')
        .send({
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
});

