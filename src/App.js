import './App.css';
//import './style.css';
import React, {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react";
import {configure} from "mobx";
import UStateStore, {UStateStoreContext} from "./store/StatesStore";
import Search from "./components/Search";
import Sort from "./components/Sort";
import StateList from "./components/StateList";
import Header from "./components/Header";
import State from "./components/State";

/*configure({
  useProxies: "never"
})*/

const App = observer(() => {
  const stateStore = useContext(UStateStoreContext)

  useEffect(() => {
    console.log('useEffect')
    stateStore.getStates()
  }, [stateStore.searchQuery, stateStore.showType, stateStore.trash])

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Sort />
        </div>
        <div className="scroll-box">
          {stateStore.states && stateStore.states.map(state => {
            return <State key={state.abbreviation} state={state}/>
          })}
        </div>
      </div>
    </div>
  );
});

export default App;
