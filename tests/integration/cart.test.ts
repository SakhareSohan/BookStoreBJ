import { expect } from 'chai';
import request from 'supertest';

import app from '../../src/index';

let admintoken = '';
let usertoken = '';

const admin = {
  firstName: 'admin',
  lastName: 'admin',
  email: 'admin@example.com',
  password: 'qwertyuiop',
  role: 'admin',
  mobileNo: 1234567890
}

const user = {
  firstName: 'user',
  lastName: 'user',
  email: 'user@example.com',
  password: 'qwertyuiop',
  mobileNo: 1234567890
}

const cart = {
  bookId: 1,
  quantity: 10,
  price: 200
}

describe('Book Store Integration testing', () => {
 describe('User APIs Test', () => {
  ////////////////////////////////////////////////////////////////////////////

  describe('Register A User', () => {
   it('Registration Of User', (done) => {
    request(app.getApp())
     .post('/api/v1/users/')
     .send(user)
     .end((err, res) => {
      expect(res.statusCode).to.be.equal(201);
      done();
     });
   });
  });

  describe('Register A Admin', () => {
    it('Registration Of User', (done) => {
     request(app.getApp())
      .post('/api/v1/users/admin')
      .send(admin)
      .end((err, res) => {
       expect(res.statusCode).to.be.equal(201);
       done();
      });
    });
   });

  describe('Login A User', () => {
   it('Login Of User', (done) => {
    request(app.getApp())
     .post('/api/v1/users/login/')
     .send({ email: user.email, password: user.password })
     .end((err, res) => {
      usertoken = 'bearer ' + res.body.data;
      expect(res.statusCode).to.be.equal(200);
      done();
     });
   });
  });

  describe('Login A Admin', () => {
    it('Login Of User', (done) => {
     request(app.getApp())
      .post('/api/v1/users/login/')
      .send({ email: admin.email, password: admin.password })
      .end((err, res) => {
       admintoken = 'bearer ' + res.body.data;
       expect(res.statusCode).to.be.equal(200);
       done();
      });
    });
   });

//////////////////////////////////////////////////////////////////////////////

describe('Create A Cart', () => {
  it('Create a Cart', (done) => {
   request(app.getApp())
    .post('/api/v1/cart/')
    .send(cart)
    .set('Authorization', usertoken)
    .end((err, res) => {
     expect(res.statusCode).to.be.equal(200);
     done();
    });
  });
 });

 describe('Get A Cart', () => {
  it('Get a Cart', (done) => {
   request(app.getApp())
    .get('/api/v1/cart/')
    .set('Authorization', usertoken)
    .end((err, res) => {
     expect(res.statusCode).to.be.equal(200);
     done();
    });
  });
 });

 describe('Delete An Item Cart', () => {
  it('Delete An Item Cart', (done) => {
   request(app.getApp())
    .get('/api/v1/cart/delete/1')
    .set('Authorization', usertoken)
    .end((err, res) => {
     expect(res.statusCode).to.be.equal(200);
     done();
    });
  });
 });

//////////////////////////////////////////////////////////////////////////////

   describe('Delete A Admin', () => {
    it('Delete Of Admin', (done) => {
     request(app.getApp())
      .post('/api/v1/users/admin/delete')
      .send({ email: admin.email })
      .set('Authorization', admintoken)
      .end((err, res) => {
       expect(res.statusCode).to.be.equal(200);
       done();
      });
    });
   });

   describe('Delete A User', () => {
    it('Delete Of User', (done) => {
     request(app.getApp())
      .post('/api/v1/users/login/delete')
      .set('Authorization', usertoken)
      .send({ email: user.email })
      .end((err, res) => {
       expect(res.statusCode).to.be.equal(200);
       done();
      });
    });
   });

 });
});
