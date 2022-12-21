import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import BookShelfChanger from "./BookShelfChanger";

const Search = ({ books, changeShelf }) => {
  //search query
  const [query, setQuery] = useState([""]);
  //book founded after search
  const [bookSearched, setbookSearched] = useState([]);
  //search Api
  const updateQuery = (query) => {
    setQuery(query); //set state of query
    //if quey not empty search
    const changeshelfOfBookSearched = async () => {
      if (query) {
        //not empty
        //search query
        await BooksAPI.search(query).then((bookSearched) => {
          try {
            if (bookSearched && !bookSearched.error) {
              setbookSearched(bookSearched);
              //set books with shelf
              setbookSearched(
                bookSearched.map((bookFounded) => {
                  //loop in books searched
                  books.forEach((book) => {
                    //loop on all book has shelf
                    if (bookFounded.id === book.id)
                      //if found searched book in books shelved set shelf
                      bookFounded.shelf = book.shelf; //set shelf
                  });
                  if (!bookFounded.shelf)
                    //set book shelved none if not had shelf
                    bookFounded.shelf = "none";
                  return bookFounded;
                })
              );
            } else {
              //any thing
              setbookSearched([]);
            }
          } catch {
            //any error
            setbookSearched([]);
          }
        });
      } else {
        setbookSearched([]);
      }
    };
    changeshelfOfBookSearched();
  };

  //const showingBooks = query===""?books:books.filter((b)=>b.title.toLowerCase().includes(query.toLowerCase()));

  //const showingBooks = query===""?books:;

  //console.log(book);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/* back to main page */}
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)} //when change quey
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {bookSearched.map((b) => (
            <li key={b.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${b?.imageLinks?.thumbnail}")`,
                    }}
                  >
                    {/* display and change shlef */}
                    <BookShelfChanger
                      book={b}
                      changeShelf={changeShelf}
                      shelf={b.shelf}
                    />
                  </div>
                </div>
                <div className="book-title">{b?.title}</div>
                <div className="book-authors">{b?.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Search;
