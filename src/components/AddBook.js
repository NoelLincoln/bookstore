import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/book/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      item_id: Math.random().toString(36).substr(2, 9),
      title,
      author,
      category,
    };

    dispatch(addBook(bookData));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <select
          id="categoryDropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="React">React</option>
          <option value="Data Structures">Data structures</option>
          <option value="Ruby">Ruby</option>
        </select>

        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
