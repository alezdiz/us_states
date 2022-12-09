import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const Sort = (props) => {
  const stateStore = useContext(UStateStoreContext)

  const handleSort = () => {
    stateStore.toggleSort()
    stateStore.getStates() //selectionSort(stateStore.states)
  }

  return (
    <div className="control-buttons">
      <button
        className={`filter-button-left ${stateStore.showType == "all" && 'active'}`}
        onClick={() => stateStore.toggleShowType()}
      >
        All States
      </button>
      <button
        className={`filter-button-right ${stateStore.showType == "favorite" && 'active'}`}
        onClick={() => stateStore.toggleShowType()}
      >
        Favorites
      </button>
      <button className="sort-button" onClick={handleSort}>
        AZ
        {stateStore.sort == "aZ" ? "down" : "up"}
      </button>
    </div>


  );
};

export default Sort;