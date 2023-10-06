import { PropTypes } from 'prop-types';
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onDelete }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookItem key={book.id} book={book} onDelete={() => onDelete(book.id)} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming each book has a unique ID
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired, // Assuming onDelete is a function that removes a book by ID
};

export default BookList;
