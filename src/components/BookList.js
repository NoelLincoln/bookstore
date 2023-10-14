import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProp, handleRemoveItem }) => (
  <div className="book-list">
    {Object.keys(booksProp).map((bookId) => (
      <div key={bookId}>
        {booksProp[bookId].map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            itemId={bookId}
            handleRemove={handleRemoveItem}
          />
        ))}
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  booksProp: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }),
    ),
  ).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default BookList;
