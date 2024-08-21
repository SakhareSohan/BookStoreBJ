import { expect } from 'chai';
import BookService from '../../src/services/book.service';

//////////////////////////////////   Books   ////////////////////////////////////////

describe('Notes ', () => {
  describe('/newBook :  create a book', () => {
    it('create a note and return the Note  ', async () => {
      const result = await new BookService().createBook({
        bookName: 'Wings of fire',
        bookImage: '',
        description: 'qwertyuiop asdfghjkl zxcvbnm',
        discountPrice: 199,
        price: 299,
        author: 'APJ',
        quantity: 22,
        userId: 1
      });
      expect(result).to.be.an('object');
    });
  });

  describe('/getAllBooksUser :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new BookService().getAllBook();
      expect(result).to.be.an('array');
    });
  });

  describe('/getAllBooksAdmin :  get all books', () => {
    it('Return all Notes  ', async () => {
      const result = await new BookService().updateBook( 1 ,{
        discountPrice: 120
      });
      expect(result).to.be.an('array');
    });
  });

  describe('/getSingleBook/:id :  get a specific book', () => {
    it('Return a Specific one Note  ', async () => {
      const result = await new BookService().getBookId(1);
      expect(result).to.be.an('object');
    });
  });
});