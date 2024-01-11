/** Redux */
import { createSlice } from '@reduxjs/toolkit';

/** Sample Data */
import PLAYS from '../data/plays';
import AUTHORS from '../data/authors';

/** Inıt Slice */
export const fuayeSlice = createSlice({
  name: 'fuaye',
  initialState: {
    plays: PLAYS,
    authors: AUTHORS,
    favorites: {
      plays: [{ id: 2 }, { id: 10 }],
      authors: [{ id: 2 }],
    },
  },
  reducers: {
    addFavoritePlay: (state, action) => {
      state.favorites.plays.push(action.payload);
    },
    removeFavoritePlay: (state, action) => {
      state.favorites.plays = state.favorites.plays.filter(
        (play) => play.id !== action.payload.id
      );
    },
    addFavoriteAuthor: (state, action) => {
      state.favorites.authors.push(action.payload);
    },
    removeFavoriteAuthor: (state, action) => {
      state.favorites.authors = state.favorites.authors.filter(
        (author) => author.id !== action.payload.id
      );
    },
  },
});

export const {
  addFavoritePlay,
  removeFavoritePlay,
  addFavoriteAuthor,
  removeFavoriteAuthor,
} = fuayeSlice.actions;

export default fuayeSlice.reducer;
