import { createStore } from 'redux'

const store = createStore((state = { movies: [], videogames: [], electronics: [], cart: {} }, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return Object.assign({}, state, { movies: action.movies })
    case 'SET_VIDEOGAMES':
      return Object.assign({}, state, { videogames: action.videogames })
    case 'SET_ELECTRONICS':
      return Object.assign({}, state, { electronics: action.electronics })
    case 'ADD_PRODUCT':
      return Object.assign({}, state, { cart: Object.assign({}, state.cart, { [action.item]: state.cart[action.item]? (state.cart[action.item] + 1) : 1 }) })
    case 'REMOVE_PRODUCT':
      if(!state.cart[action.item]) return state
      else return Object.assign({}, state, { cart: Object.assign({}, state.cart, { [action.item]: (state.cart[action.item] - 1) }) })
    default:
      return state
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store