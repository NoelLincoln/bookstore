import { PropTypes } from 'prop-types';

const BookItem = ({ book, onDelete, key }) => (
  <section className="book-item">
    <div className="book-info">
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <div className="actions">
        <p>
          {book.author}
          comments
        </p>
        <button type="button" onClick={() => onDelete(key)}>
          Remove
        </button>
        <p>Edit</p>
      </div>
    </div>
    <div className="progress">
      <p>Progress icon</p>
      <div>
        <p>
          {book.author}
          completed
        </p>
      </div>
    </div>
    <div className="update-progress">
      <p>Current chapter</p>
      <p>
        Chapter
        {book.author}
      </p>
      <button type="button">Update progress</button>
    </div>
  </section>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
};

export default BookItem;
