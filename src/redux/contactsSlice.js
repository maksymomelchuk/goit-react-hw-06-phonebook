import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
