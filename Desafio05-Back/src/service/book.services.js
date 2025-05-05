import bookRepository from "../repositories/book.repositories.js";

async function createBookService(newBook) {
  const createdBook = await bookRepository.createBookRepository(newBook);
  if (!createdBook) throw new Error("Error creating book");
  return createdBook;
}

async function findAllBooksService() {
  const books = await bookRepository.findAllBooksRepository();
  return books;
}

async function findBookByIdService(bookId) {
  const book = await bookRepository.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  return book;
}

async function updateBookService(updatedBook, bookId) {
  const book = await bookRepository.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  const response = await bookRepository.updateBookRepository(
    bookId,
    updatedBook
  );
  return response;
}

async function deleteBookService(bookId) {
  const book = await bookRepository.findBookByIdRepository(bookId);
  if (!book) throw new Error("Book not found");
  const response = await bookRepository.deleteBookRepository(bookId);
  return response;
}

export default {
  createBookService,
  findAllBooksService,
  findBookByIdService,
  updateBookService,
  deleteBookService,
};
