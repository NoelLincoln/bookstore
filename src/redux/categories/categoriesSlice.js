import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

const selectStatus = (state) => state.categories.status;

export { selectStatus };
export default categoriesSlice.reducer;
