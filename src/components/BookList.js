import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/book/bookSlice';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-list">
      {Object.values(books).map((bookArray) => {
        if (Array.isArray(bookArray)) {
          return bookArray.map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              author={book.author}
              itemId={book.id}
            />
          ));
        }
        return null; // Handle the case where bookArray is not an array
      })}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        progress: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
};

export default BookList;
