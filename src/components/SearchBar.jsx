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
    <div className="search-bar-wrapper">
      <input
        type="text"
        placeholder="Buscar aplicativos..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
