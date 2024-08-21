import { expect } from 'chai';
import UserService from '../../src/services/user.service';

///////////////////////////////////   user    //////////////////////////////////////////////////////

describe('Book Store User : Unit Testing', () => {
  describe('/ : register with id and passsword', () => {
    it('should return object contain registration detail of user', async () => {
      const result = await new UserService().newUser({
        firstName: 'user',
        lastName: 'user',
        email: 'user@gmail.com',
        password: 'qwertyuiop',
        mobile: '1234567890',
        role: 'user'
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/login : login with credentials', () => {
    it('should return Details of user', async () => {
      const result = await new UserService().getUser('user@gmail.com',
        'qwertyuiop',
        'user');
      expect(result).to.be.an('object');
    });
  });

  describe('/deleteuser : Delete The User', () => {
    it('delete the User and return empty string ', async () => {
      const result = await new UserService().deleteUser({
        email: 'user@gmail.com'
      });
      expect(result).to.equal('');
    });
  });
});

