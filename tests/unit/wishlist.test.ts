import { expect } from 'chai';
import WishlistService from '../../src/services/wishlist.service';

//////////////////////////////////   Wishlist   ////////////////////////////////////////

describe('Notes ', () => {
  describe('/addToCart :  create a book', () => {
    it('create a note and return the Note  ', async () => {
      const result = await new WishlistService().createWishlist({
        userId: 1,
        bookId: 1
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllBooksFromWishlist :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new WishlistService().getWishlist(1);
      expect(result).to.be.an('array');
    });
  });
});