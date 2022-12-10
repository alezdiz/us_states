import {makeAutoObservable} from "mobx"
import {createContext} from "react";

class StatesStore {

  states = []
  showType = "all"
  searchQuery = ''
  favorites = []
  trash = []
  sort = 'aZ'

  constructor() {
    makeAutoObservable(this)
  }

  getStates() {
    fetch("http://" + window.location.hostname + ":3001/us_state")
      .then(res => res.json())
      .then(states => {
        states = states.filter(state => !this.trash.includes(state.abbreviation))
        if (this.searchQuery) {
          const regexp = new RegExp(this.searchQuery,"i");
          states = states.filter(state => state.name.match(regexp))
        }
        if (!this.searchQuery && this.showType === "favorite") {
            states = states.filter(state => this.favorites.includes(state.abbreviation))
        }
        if (this.sort === 'zA') {
          states = this.selectionSort(states)
        }
        this.setStates(states)
      })
      .catch(error => {
        //error handling
        console.log(error);
      });
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
      delete this.favorites[i]
      console.log("this.favorites", this.favorites)
    } else {
      this.favorites.push(id)
    }

  }

  pushDeleted(id) {
    this.trash.push(id)
  }

  toggleSort() {
    if (this.sort === 'aZ')
      this.sort = 'zA'
    else
      this.sort = 'aZ'
  }

  selectionSort([...array]) {
    let count = 0;
    for (let i = 0; i< array.length; i++) {
      let indexMax = i
      for (let j = i + 1; j < array.length; j++) {
        if (array[j].name > array[indexMax].name) {
          indexMax = j
        }
        count += 1
      }
      let tmp = array[i]
      array[i] = array[indexMax]
      array[indexMax] = tmp
    }
    return array;
  }
}

export const UStateStoreContext = createContext(new StatesStore());