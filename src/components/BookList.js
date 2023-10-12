import React from 'react';
import { PropTypes } from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookItem key={book.id} title={book.title} author={book.author} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
