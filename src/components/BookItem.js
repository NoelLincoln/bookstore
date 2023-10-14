import { PropTypes } from 'prop-types';

const BookItem = ({
  itemId, title, author, handleRemove,
}) => (
  <section className="book-item">
    <div className="book-info">
      <h4>{title}</h4>
      <p>{author}</p>
      <div className="actions">
        <p>{author}</p>
        <button type="button" onClick={() => handleRemove(itemId)}>
          Remove
        </button>
        <p>Edit</p>
      </div>
    </div>
  </section>
);

BookItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default BookItem;
