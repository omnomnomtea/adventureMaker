import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import adventures from './adventures'

const reducer = combineReducers({
  user,
  adventures
})


//SET w/ REDUX DevTools
const middleware = [thunkMiddleware, createLogger({collapsed: true})]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware)
  ));


export default store
export * from './user'
export * from './adventures'
