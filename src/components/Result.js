import React, {useContext} from 'react';
import {UStateStoreContext} from "../store/StatesStore";

const Result = () => {
  const stateStore = useContext(UStateStoreContext)

  return (
    <div className="result">
      Result ({stateStore.states.length})
    </div>
  );
};

export default Result;