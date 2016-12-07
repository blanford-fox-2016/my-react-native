import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducers from '../reducers'

// const middleware = applyMiddleware(promise(), thunk, logger())

const counter = (state={}, action) => {
  return state
}
const rootReducers = combineReducers({
  reducers,
  counter
})

export const store = createStore(rootReducers)
store.subscribe(() => {
  console.log('this is dude', store.getState())
})

store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})

// export default createStore(reducers, middleware)
