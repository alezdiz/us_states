import {makeAutoObservable} from "mobx"
import {createContext} from "react";
import {selectionSort, selectionRSort} from "../service/sort";

class StatesStore {
  originStates = []
  states = []
  searchQuery = ''
  showType = "all"
  sortType = 'aZ'

  constructor() {
    makeAutoObservable(this)
  }

  fetchStates () {
    fetch("http://" + window.location.hostname + ":3001/us_state")
      .then(res => res.json())
      .then(states => {
        this.setOriginStates(states)
        this.setStates(states)
      })
      .catch(error => {
        //error handling
        console.log(error);
      });
  }

  setOriginStates(states) {
    this.originStates = states
  }

  setStates(states) {
    console.log('setstates')
    this.states = states
    console.log(this.states)
  }

  toggleShowType() {
    if (this.showType === "all") {
      this.showType = "favorite"
      this.filter('favorite')
    } else {
      this.showType = "all"
      this.filter()
    }
  }

  searchState = (query) => {
    this.searchQuery = query.trim();
    this.searchQuery = this.searchQuery.charAt(0).toUpperCase() + this.searchQuery.slice(1);
    const regexp = new RegExp('^'+this.searchQuery,"i");
    this.originStates.map(state => {
      if (state.name.match(regexp)) {
        return state.inSearch = true;
      } else {
        return state.inSearch = false;
      }
    });
    this.filter()
  }

  defineFilter = () => {
    if (this.searchQuery) return "search";
    else if (this.showType === "favorite") return "favorite";
  }

  filter = (type) => {
    if (!type)
      type = this.defineFilter();
    let states;
    switch (type) {
      case "search":
        states = this.originStates;
        this.states = states.filter(state => state.inSearch === true);
        break;
      case "favorite":
        states = this.originStates;
        this.states = states.filter(state => state.favorite === true);
        break;
      default:
        this.states = this.originStates;
        break;
    }
  }

  favoriteState(id) {
    this.originStates = this.originStates.map(state => state.abbreviation === id ? {...state, favorite: !state.favorite} : state)
    this.filter()
  }

  removeState = (id) => {
    this.originStates = this.originStates.filter(state => state.abbreviation !== id)
    this.filter()
  }

  sortStates = () => {
    if (this.sortType === 'aZ') {
      this.sortType = 'zA'
      this.states = selectionRSort(this.states);
      this.originStates = selectionRSort(this.originStates)
    }else{
      this.sortType = 'aZ'
      this.states = selectionSort(this.states);
      this.originStates = selectionSort(this.originStates)
    }

  }

}

export const UStateStoreContext = createContext(new StatesStore());