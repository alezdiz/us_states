import './App.css';
import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import {UStateStoreContext} from "./store/StatesStore";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Header from "./components/Header";
import State from "./components/State";
import Result from "./components/Result";
import ControlButtons from "./components/ControlButtons";

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
        <div className="divide">
          <div className="control-buttons">
            {stateStore.searchQuery ? <Result /> : <ControlButtons />}
            <Sort />
          </div>
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
