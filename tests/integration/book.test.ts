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

 });
});
