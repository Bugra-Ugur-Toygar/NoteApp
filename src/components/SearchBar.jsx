import PropTypes from "prop-types";

function SearchBar({ setSearchText }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBar;
