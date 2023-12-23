// searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  filters: {
    camera: "",
    processor: "",
    ram: "",
    display: "",
    color: "",
    price: { min: null, max: null },
  },
  filteredMobiles: [],
  allMobiles: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setFilteredMobiles: (state, action) => {
      state.filteredMobiles = action.payload;
    },
    setAllMobiles: (state, action) => {
      state.allMobiles = action.payload;
      state.filteredMobiles = action.payload;
    },
  },
});

export const { setSearchQuery, setFilters, setFilteredMobiles, setAllMobiles } =
  searchSlice.actions;
export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectFilters = (state) => state.search.filters;
export const selectFilteredMobiles = (state) => state.search.filteredMobiles;
export const selectAllMobiles = (state) => state.search.allMobiles;

export default searchSlice.reducer;
