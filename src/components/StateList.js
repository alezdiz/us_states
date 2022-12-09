import React, {useContext, useEffect} from 'react';
import {UStateStoreContext} from "../store/StatesStore";
import State from "./State";

const StateList = () => {
  const stateStore = useContext(UStateStoreContext)
  
  return (
    <div>
      {stateStore.states && stateStore.states.map(state => {
        return <State key={state.abbreviation} state={state}/>
      })}
    </div>
  );
};

export default StateList;