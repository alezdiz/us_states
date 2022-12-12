import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const Search = () => {
  const stateStore = useContext(UStateStoreContext)

  const handleSearch = (e) => {
    stateStore.searchState(e.target.value);
  }

  return (
    <div className="fg-search">
      <span className="search-icon"></span>
      <input
        className="input-search"
        value={stateStore.searchQuery}
        onChange={handleSearch}
        placeholder="Search"
      />
      <span
        className="close-icon"
        onClick={() => stateStore.searchState('')}
      ></span>
    </div>
  );
};

export default Search;