import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search by title, ingredient, or prep time..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
