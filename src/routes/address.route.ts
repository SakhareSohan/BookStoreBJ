import express, { IRouter } from 'express';
import addressController from '../controllers/address.controller';
import { userAuth } from '../middlewares/auth.middleware';

class AddressRoutes {
  private AddressController = new addressController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {

    this.router.post('/', userAuth, this.AddressController.setAddress); 

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default AddressRoutes;
