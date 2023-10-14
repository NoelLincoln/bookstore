import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XaAkasEPEa3m4PZe2Njk/books';

const initialState = {
  books: {},
  fetchStatus: 'idle',
  addStatus: 'idle',
  removeStatus: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (bookData) => {
  try {
    const response = await axios.post(apiUrl, bookData);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const removeBookAsync = createAsyncThunk(
  'books/removeBook',
  async (itemId, { rejectWithValue }) => {
    try {
      await axios.delete(`${apiUrl}/${itemId}`);
      return itemId;
    } catch (error) {
      return rejectWithValue('Failed to remove book');
    }
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.fetchStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.addStatus = 'succeeded';
        state.books[action.payload.item_id] = [action.payload];
      })
      .addCase(addBook.pending, (state) => {
        state.addStatus = 'loading';
      })
      .addCase(addBook.rejected, (state) => {
        state.addStatus = 'failed';
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.removeStatus = 'succeeded';
        delete state.books[action.payload];
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.removeStatus = 'loading';
      })
      .addCase(removeBookAsync.rejected, (state) => {
        state.removeStatus = 'failed';
      });
  },
});

export default bookSlice.reducer;
