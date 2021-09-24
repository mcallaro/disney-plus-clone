import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = {
  movies: [],
  types: []
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setTypes: (state, action) => {
      state.types = action.payload;
    }
  }
});

export const { setMovies, setTypes } = movieSlice.actions;

export const selectMovies = (state: RootState) => state.movie.movies;
export const movieTypes = (state: RootState) => state.movie.types;

export default movieSlice.reducer;