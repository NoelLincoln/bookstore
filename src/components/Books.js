import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddBook from './AddBook';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <div>
      <BookList books={books} />
      <AddBook />
    </div>
  );
};

export default Books;
