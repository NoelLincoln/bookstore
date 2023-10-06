import { PropTypes } from 'prop-types';
import BookList from './BookList';
import AddBook from './AddBook';

const Books = ({ books, onDelete, onAddBook }) => (
  <>
    <BookList books={books} onDelete={onDelete} />
    <AddBook onAddBook={onAddBook} />
  </>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming each book has a unique ID
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddBook: PropTypes.func.isRequired,
};
export default Books;
