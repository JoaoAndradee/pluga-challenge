import PropTypes from 'prop-types';
import { useState } from 'react';

import '../styles/components/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  }

  return (
    <label className="search-bar-wrapper">
      <i className="fas fa-search" />
      <input
        type="text"
        placeholder="Buscar aplicativos..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
        data-testid="search-bar"
      />
    </label>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBar;
