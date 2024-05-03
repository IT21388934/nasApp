import React from "react";
import PropTypes from "prop-types";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search term to the parent component for further processing
    onSearch(searchTerm);
  };

  return (
    <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
