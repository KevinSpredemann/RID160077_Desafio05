import bookServices from "../service/book.services.js";

async function createBookController(req, res) {
  const newBook = req.body;
  try {
    const createdBook = await bookServices.createBookService(newBook);
    res.status(201).send(createdBook);
  } catch (error) {
    return res.status(400).send({
      error: error?.message || "Erro desconhecido",
      details: error
    });
  }
}

async function findAllBooksController(req, res) {
  try {
    const books = await bookServices.findAllBooksService();
    res.status(200).send(books);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}

async function findBookByIdController(req, res) {
  const bookId = req.params.id;
  try {
    const book = await bookServices.findBookByIdService(bookId);
    res.status(200).send(book);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}

async function updatedBookController(req, res) {
  const updatedBook = req.body;
  const bookId = req.params.id;
  try {
    const response = await bookServices.updateBookService(updatedBook, bookId);
    res.status(200).send(response);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

async function deleteBookController(req, res) {
  const bookId = req.params.id;
  try {
    const response = await bookServices.deleteBookService(bookId);
    res.status(200).send(response);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

export default {
  createBookController,
  findAllBooksController,
  findBookByIdController,
  updatedBookController,
  deleteBookController,
};
