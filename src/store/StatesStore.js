import {makeAutoObservable} from "mobx"
import {createContext} from "react";
import {selectionSort, selectionRSort} from "../service/sort";

class StatesStore {
  originStates = []
  states = []
  showType = "all"
  searchQuery = ''
  favorites = []
  trash = []
  sort = 'aZ'

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

  filterStates () {
    let states = [...this.originStates];
    states = states.filter(state => !this.trash.includes(state.abbreviation));
    if (this.searchQuery) {
      const regexp = new RegExp(this.searchQuery,"i");
      states = states.filter(state => state.name.match(regexp))
    }
    if (!this.searchQuery && this.showType === "favorite") {
      states = states.filter(state => this.favorites.includes(state.abbreviation))
    }
    if (this.sort === 'aZ') {
      states = selectionSort(states)
    } else {
      states = selectionRSort(states)
    }
    this.setStates(states);
  }

  setOriginStates(states) {
    this.originStates = states
  }

  setStates(states) {
    this.states = states
  }

  toggleShowType() {
    if (this.showType === "all")
      this.showType = "favorite"
    else
      this.showType = "all"
  }

  setSearchQuery(type) {
    this.searchQuery = type;
  }

  toggleFavorite(id) {
    let i = this.favorites.indexOf(id)
    if (i !== -1) {
      this.favorites = [...this.favorites].filter(fav => fav !== id)
    } else {
      this.favorites = [...this.favorites, id]
    }
  }

  pushDeleted(id) {
    this.trash = [...this.trash, id]
  }

  toggleSort() {
    if (this.sort === 'aZ')
      this.sort = 'zA'
    else
      this.sort = 'aZ'
  }


}

export const UStateStoreContext = createContext(new StatesStore());