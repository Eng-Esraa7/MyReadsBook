import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ book, changeShelf, shelf }) => {
  //when select shelve change
  const handleSelect = (book, e) => {
    e.preventDefault();
    changeShelf(book, e?.target?.value);
    //console.log(shelf);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => handleSelect(book, e)}>
        {" "}
        {/* option */}{" "}
        <option value="move" disabled>
          Move to...{" "}
        </option>{" "}
        <option value="currentlyReading"> Currently Reading </option>{" "}
        <option value="wantToRead"> Want to Read </option>{" "}
        <option value="read"> Read </option>{" "}
        <option value="none"> None </option>{" "}
      </select>{" "}
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;
