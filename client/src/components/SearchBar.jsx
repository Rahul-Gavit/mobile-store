import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setFilteredMobiles,
  selectSearchQuery,
  selectFilters,
  selectAllMobiles,
} from "../redux/slices/SearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const filters = useSelector(selectFilters);
  const allMobiles = useSelector(selectAllMobiles);

  const handleSearch = () => {
    const searchWords = searchQuery.split(/\s+/).filter(Boolean);

    const filteredData = allMobiles.filter((mobile) =>
      searchWords.every((word) => {
        if (word.toLowerCase() === "price") {
          // Check for exact price match
          const numericValue = parseFloat(
            searchWords[searchWords.indexOf(word) + 1]
          );
          return (
            !isNaN(numericValue) &&
            mobile.price >= filters.price.min &&
            mobile.price <= filters.price.max
          );
        }

        return (
          Object.entries(filters).some(
            ([key, value]) =>
              !value ||
              key === "price" ||
              mobile.highlights[key].toLowerCase().includes(value.toLowerCase())
          ) &&
          (mobile.modelName.toLowerCase().startsWith(word.toLowerCase()) ||
            Object.values(mobile.highlights).some(
              (detail) =>
                typeof detail === "string" &&
                detail.toLowerCase().includes(word.toLowerCase())
            ))
        );
      })
    );

    dispatch(setFilteredMobiles(filteredData));
  };

  const changeHandler = (event) => {
    const inputValue = event.target.value;
    dispatch(setSearchQuery(inputValue));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form className="flex items-center" onSubmit={submitHandler}>
        <div className="relative w-full">
          <input
            type="text"
            id="search"
            onChange={changeHandler}
            value={searchQuery}
            className="bg-gray-50 border shadow-black shadow-md focus:outline-none border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-900 dark:focus:border-purple-900"
            placeholder="Search Mobiles..."
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 shadow-black shadow-md text-sm font-bold text-white bg-purple-600 rounded-sm border border-purple-900 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
