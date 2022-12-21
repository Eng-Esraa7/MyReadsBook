import "./App.css";
import { useState, useEffect } from "react";
import Main from "./Component/Main";
import Search from "./Component/Search";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setbooks] = useState([]); //all books

  //get all books
  useEffect(() => {
    const getBooks = async () => {
      const books = await BooksAPI.getAll();
      //console.log(books);
      setbooks(books);
    };
    getBooks();
  }, []);

  //change shelf
  const changeShelf = (book, shelf) => {
    const changeshelfOfBook = async () => {
      await BooksAPI.update(book, shelf); //update in api
      //setbooks(books.concat(res))
      //after update  get all books again
      const getBooks = async () => {
        const books = await BooksAPI.getAll();
        setbooks(books); //set state
      };
      getBooks(); //call func
    };
    changeshelfOfBook();
  };

  return (
    //Route of main books
    <Routes>
      <Route path="*" element={"Not Found"} />
      <Route
        exact
        path="/"
        element={<Main books={books} changeShelf={changeShelf} />}
      />
      {/* //Route of search */}
      <Route
        exact
        path="/Search"
        element={<Search books={books} changeShelf={changeShelf} />}
      />
    </Routes>
  );
}
export default App;
