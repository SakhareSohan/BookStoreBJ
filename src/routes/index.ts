import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import cartRoute from './cart.route';
import orderRoute from './order.route';
import wishlistRoute from './wishlist.route';
import addressRoute from './address.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });

  router.use('/users', new userRoute().getRoutes());

  router.use('/books', new bookRoute().getRoutes());

  router.use('/cart', new cartRoute().getRoutes());

  router.use('/order', new orderRoute().getRoutes());

  router.use('/wishlist', new wishlistRoute().getRoutes());

  router.use('address', new addressRoute().getRoutes());

  return router;
};

export default routes;
