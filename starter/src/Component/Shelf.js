import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ books, Title, shelf, changeShelf }) => {
  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{Title}</h2>
        <div className="bookshelf-books">
          <Book books={books} shelf={shelf} changeShelf={changeShelf} />
        </div>
      </div>
    </>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  Title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Shelf;
