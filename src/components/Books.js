import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, removeBookAsync, addBook } from '../redux/book/bookSlice';
import BookList from './BookList';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const booksProp = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveItem = (bookId) => {
    dispatch(removeBookAsync(bookId));
  };

  return (
    <div>
      <BookList booksProp={booksProp} handleRemoveItem={handleRemoveItem} />
      <AddBook addBook={addBook} />
    </div>
  );
};

export default Books;
