
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import anecdoteReducer from './reducers/anecdoteReducer'
import notifcationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'



const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notifcationReducer,
  filter: filterReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

// console.log(store.getState())
// store.subscribe(() => console.log(store.getState()))

export default store