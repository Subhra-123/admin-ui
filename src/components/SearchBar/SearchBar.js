import React from "react";
import "./searchbar.css";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="searchBar">
      <input
        className="searchInput"
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Search by name, email or role"
      />
    </div>
  );
};

export default SearchBar;
