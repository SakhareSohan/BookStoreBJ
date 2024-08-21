import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth, adminAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {

    this.router.post('/', this.UserValidator.registration, this.UserController.newUser);  // registration

    this.router.post('/admin', this.UserValidator.registrationAdmin, this.UserController.newUser);  // registration admin

    this.router.post('/login', this.UserController.getUser); // login

    this.router.post('/login/delete', userAuth, this.UserController.deleteUser);
    
    this.router.post('/admin/delete', adminAuth, this.UserController.deleteUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
