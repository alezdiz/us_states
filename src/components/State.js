import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const State = ({state}) => {
  const stateStore = useContext(UStateStoreContext)

  /*const handleDelete = (id) => {
    stateStore.pushDeleted(id)
  }*/

  /*const toggleFavorite = (id) => {
    stateStore.toggleFavorite(id)
  }*/

  return (

      <div className="list-item">
        <div className="edge"></div>
        <span className="list vertical-center">{state.name}</span>
        <div className="control vertical-center">
          <span
            className={`favorite${state.favorite ? ' active' : ""}`}
            onClick={() => stateStore.favoriteState(state.abbreviation)}></span>

          <span
            className="delete"
            onClick={() => stateStore.removeState(state.abbreviation)}></span>

        </div>
      </div>

  );
};

export default State;