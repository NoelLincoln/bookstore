import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import BookList from './components/BookList';
import AddBooK from './components/AddBook';
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
      <BookList books={books} onDelete={onDelete} />
      <AddBooK onAddBook={addBook} />
    </>
  );
};

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BookList />}>
        <Route index element={<BookList />} />
      </Route>
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>;

export default App;
