import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const State = ({state}) => {
  const stateStore = useContext(UStateStoreContext)

  const handleDelete = (id) => {
    console.log("handleDelete", id)
    stateStore.pushDeleted(id)
    stateStore.getStates()
  }

  const toggleFavorite = (id) => {
    stateStore.toggleFavorite(id)
    stateStore.getStates()
  }

  return (

      <li className="list-item">
        <span className="list">{state.name}</span>
        <div>
          <button

            onClick={() => handleDelete(state.abbreviation)}>
            Del
          </button>

          <button
            class={`${stateStore.favorites.includes(state.abbreviation) && 'active'}`}
            onClick={() => toggleFavorite(state.abbreviation)}>
            Star
          </button>
        </div>
      </li>

  );
};

export default State;