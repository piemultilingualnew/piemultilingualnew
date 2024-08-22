import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

export const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setIsVisible(state, action) {
      state.isVisible = action.payload;
    },
    toggleBlock(state) {
      const updatedVisibility = !state.isVisible;
      state.isVisible = updatedVisibility;
      if (typeof window !== 'undefined') {
        localStorage.setItem('showBlock', updatedVisibility.toString());
      }
    },
    toggleEdit(state) {
      state.isVisible = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('showBlock', 'true');
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase('HYDRATE', (state, action) => {
      return {
        ...state,
        ...action.payload.edit,
      };
    });
  },
});

export const { isVisible, setIsVisible, toggleBlock, toggleEdit } = editSlice.actions;
export const selectIsVisible = (state) => state.edit.isVisible;

