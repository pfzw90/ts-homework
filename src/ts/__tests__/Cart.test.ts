import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book'
import MusicAlbum from '../domain/MusicAlbum'


test('new card should be empty', () => {
  const cart = new Cart; 
  expect(cart.items.length).toBe(0);
});

test('ability to add movie to cart', () => {
  const cart = new Cart; 
  const movie = new Movie(1003, 'Avengers', 300, 2012, 'USA', ['action','comedy'], 123);
  cart.add(movie)
  expect(cart.items[0]).toBe(movie)
})

test('should return cart total with and without discount', () => {
  const cart = new Cart; 
  const movie = new Movie(1003, 'Avengers', 3000, 2012, 'USA', ['action','comedy'], 123);
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicalbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)
  cart.add(movie);
  cart.add(book);
  cart.add(musicalbum);
  expect(cart.total()).toEqual(5900)
  expect(cart.totalDiscount(10)).toEqual(5310)
  expect((new Cart).total()).toEqual(0)
  expect((new Cart).total()).toEqual(0)
});

test('should remove found item', () => {
  const cart = new Cart; 
  const movie = new Movie(1003, 'Avengers', 3000, 2012, 'USA', ['action','comedy'], 123);
  cart.add(movie)
  expect(cart.del(1003)).toBe('Удалено успешно')
  expect(cart.items.length).toBe(0)
  expect((() => cart.del(1003))).toThrow(new Error('Проверьте правильность введенного id'))
});

