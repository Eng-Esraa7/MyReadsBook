import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Shelf from "./Shelf";

const Main = ({ books, changeShelf }) => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* Read Shelf */}
            <Shelf
              books={books}
              shelf={"currentlyReading"}
              Title={"Currently Reading"}
              changeShelf={changeShelf}
            />
            <Shelf
              books={books}
              shelf={"wantToRead"}
              Title={"Want to Read"}
              changeShelf={changeShelf}
            />
            <Shelf
              books={books}
              shelf={"read"}
              Title={"Read"}
              changeShelf={changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Main;
