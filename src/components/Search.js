import React, {useContext, useState} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const Search = () => {
  const stateStore = useContext(UStateStoreContext)

  const handleSearch = (e) => {
    stateStore.setSearchQuery(e.target.value);
  }

  return (
    <div>
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