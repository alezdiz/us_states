import React, {useContext, useEffect} from 'react';
import {UStateStoreContext} from "../store/StatesStore";
import State from "./State";

const StateList = () => {
  const stateStore = useContext(UStateStoreContext)

  useEffect(() => {
    stateStore.fetchStates()
  }, [])

  return (
    <div>
      {!!stateStore.states.length && stateStore.states.map(state => {
        return <State key={state.abbreviation} state={state}/>
      })}
    </div>
  );
};

export default StateList;