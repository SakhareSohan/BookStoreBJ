import { expect } from 'chai';
import CartService from '../../src/services/cart.service';

//////////////////////////////////   Cart   ////////////////////////////////////////

describe('Notes ', () => {
  describe('/addToCart :  create a book', () => {
    it('create a note and return the Note  ', async () => {
      const result = await new CartService().createCart({
        userId: 1,
        bookId: 1,
        quantity: 2,
        discountPrice: 199,
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllBooksFromCart :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new CartService().deleteBook(8);
      expect(result).to.be.an('array');
    });
  });
});