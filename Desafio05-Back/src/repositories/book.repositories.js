import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        num_paginas INTEGER NOT NULL,
        isbn TEXT NOT NULL,
        editora TEXT NOT NULL
    )
`);

function createBookRepository(newBook) {
  return new Promise((resolve, reject) => {
    const { titulo, num_paginas, isbn, editora } = newBook;
    db.run(
      `INSERT INTO books (titulo, num_paginas, isbn, editora)
       VALUES (?, ?, ?, ?)`,
      [titulo, num_paginas, isbn, editora],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, ...newBook });
        }
      }
    );
  });
}

function findAllBooksRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM books`, [], (err, books) => {
      if (err) {
        reject(err);
      } else {
        resolve(books);
      }
    });
  });
}

function findBookByIdRepository(bookId) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM books WHERE id = ?`, [bookId], (err, book) => {
      if (err) {
        reject(err);
      } else {
        resolve(book);
      }
    });
  });
}
function updateBookRepository(bookId, updatedBook) {
  const fields = ["titulo", "num_paginas", "isbn", "editora"];
  const updates = [];
  const values = [];

  Object.keys(updatedBook).forEach((field) => {
    if (!fields.includes(field)) {
      throw new Error(`Invalid field: ${field}`);
    }
    updates.push(`${field} = ?`);
    values.push(updatedBook[field]);
  });

  const query = `UPDATE books SET ${updates.join(", ")} WHERE id = ?`;
  values.push(bookId);

  return new Promise((resolve, reject) => {
    db.run(query, values, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: bookId, ...updatedBook });
      }
    });
  });
}

function deleteBookRepository(bookId) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM books WHERE id = ?`, [bookId], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: "Book deleted successfully", id: bookId });
      }
    });
  });
}

export default {
  createBookRepository,
  findAllBooksRepository,
  findBookByIdRepository,
  updateBookRepository,
  deleteBookRepository,
};
