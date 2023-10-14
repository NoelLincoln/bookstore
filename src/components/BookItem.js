import { PropTypes } from 'prop-types';
import loadimg from './load.png';

const BookItem = ({
  itemId, title, category, author, handleRemove,
}) => (
  <section className="book-item">
    <div className="book-info">
      <p className="category">{category}</p>
      <p className="book-title">{title}</p>
      <p className="author">{author}</p>

      <div className="actions">
        <p>comment</p>
        <button
          type="button"
          onClick={() => handleRemove(itemId)}
          className="remove-btn"
        >
          Remove
        </button>
        <p>Edit</p>
      </div>
    </div>
    <div className="progress">
      <img src={loadimg} alt="progress" className="loadingprogress" />
      <div className="progress-percent">
        <p>64%</p>
        <p>completed</p>
      </div>
    </div>
    <div className="update-progress">
      <p className="current-chapter">Current chapter</p>
      <p>Chapter 15</p>
      <button className="update-progress-btn" type="button">
        Update progress
      </button>
    </div>
  </section>
);

BookItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default BookItem;
