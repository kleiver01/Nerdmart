import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="absolute top-0 right-0 px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
