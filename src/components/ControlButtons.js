import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const ControlButtons = () => {
  const stateStore = useContext(UStateStoreContext)

  return (
    <div>
        <span
          className={`filter-button-left ${stateStore.showType === "all" && 'active'}`}
          onClick={() => stateStore.toggleShowType()}
        >
          All States
        </span>
      <span
        className={`filter-button-right ${stateStore.showType === "favorite" && 'active'}`}
        onClick={() => stateStore.toggleShowType()}
      >
          Favorites
        </span>
    </div>
  );
};

export default ControlButtons;