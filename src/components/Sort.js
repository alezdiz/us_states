import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const Sort = () => {
  const stateStore = useContext(UStateStoreContext)

  const handleSort = () => {
    stateStore.toggleSort()
    stateStore.getStates() //selectionSort(stateStore.states)
  }

  return (
      <span
        className={`vertical-center sort-button ${stateStore.sort === "aZ" ? "down" : "up"}`}
        onClick={handleSort}
      ></span>
  );
};

export default Sort;