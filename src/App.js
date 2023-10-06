import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Books from './components/Books';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Noel',
      author: 'Noel',
      genre: 'Data Science',
      progress: '0%',
    },
    {
      id: 2,
      title: 'Bryant',
      author: 'Bryant',
      genre: 'React',
      progress: '0%',
    },
  ]);

  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };

  const onDelete = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/"
          element={
            <Books books={books} onDelete={onDelete} onAddBook={addBook} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
