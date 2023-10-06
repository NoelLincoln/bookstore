import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, category });
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        id="categoryDropdown"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        <option value="Author 1">React</option>
        <option value="Author 2">Data structures</option>
        <option value="Author 3">Ruby</option>
      </select>

      <button type="submit">Add Book</button>
    </form>
  );
};

AddBook.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};
export default AddBook;
