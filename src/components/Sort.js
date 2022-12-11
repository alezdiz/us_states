import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const Sort = () => {
  const stateStore = useContext(UStateStoreContext)

  return (
      <span
        className={`vertical-center sort-button ${stateStore.sortType === "aZ" ? "down" : "up"}`}
        onClick={stateStore.sortStates}
      ></span>
  );
};

export default Sort;