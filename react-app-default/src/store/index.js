import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './../redux-ducks'

const storeConfig = (preloadedState = {}) =>
  createStore(combineReducers(reducers), preloadedState, applyMiddleware(thunk))

export default storeConfig
