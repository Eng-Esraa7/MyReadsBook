import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ books, shelf, changeShelf }) => {
  return (
    <div>
      <ol className="books-grid">
        {books
          .filter((book) => book?.shelf === shelf) //match shelf
          .map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${book?.imageLinks?.thumbnail}")`,
                    }}
                  ></div>
                  {/* display shelves */}
                  <BookShelfChanger
                    book={book}
                    changeShelf={changeShelf}
                    shelf={shelf}
                  />
                </div>
                <div className="book-title">{book?.title}</div>
                <div className="book-authors">{book?.authors}</div>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Book;
