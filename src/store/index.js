import { createStore,applyMiddleware } from 'redux'
import reducer from './reducers'
// import thunk from 'redux-thunk'
// import promise from 'redux-promise'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware) );


// const store = createStore(reducer, applyMiddleware(thunk, promise, logger) );

export default store;