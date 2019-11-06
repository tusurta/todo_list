import { combineReducers, createStore as reduxCreateStore, Reducer, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export interface StoreState {}

export interface ConsumerState {}

export interface GlobalState {}

const reducer: Reducer<GlobalState> = combineReducers<GlobalState>({})

const store = () => reduxCreateStore(reducer, {}, applyMiddleware(thunk, logger))
export default store
