import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const Search = () => {
  const stateStore = useContext(UStateStoreContext)

  const handleSearch = (e) => {
    stateStore.searchState(e.target.value);
  }

  return (
    <div className="fg-search">
      <span></span>
      <input
        className="input-search"
        value={stateStore.searchQuery}
        onChange={handleSearch}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;