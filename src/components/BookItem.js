import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/bookSlice';

const BookItem = ({ itemId, title, author }) => {
  const dispatch = useDispatch();

  return (
    <section className="book-item">
      <div className="book-info">
        <h4>{title}</h4>
        <p>{author}</p>
        <div className="actions">
          <p>
            {author}
            comments
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(itemId));
            }}
          >
            Remove
          </button>
          <p>Edit</p>
        </div>
      </div>
    </section>
  );
};

BookItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
