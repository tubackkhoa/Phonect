import { createStore, applyMiddleware, compose } from 'redux'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'
import { AsyncStorage } from 'react-native'
// import { persistStore, autoRehydrate } from 'redux-persist'
import createActionBuffer from 'redux-action-buffer'
import { REHYDRATE } from 'redux-persist/constants'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'

import rootReducer from './reducers'
import rootSaga from './sagas'

const initialState = Immutable.Map()

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, createActionBuffer(REHYDRATE)]


// only use logger when there is not devTools
if (__DEV__) {  
  // add logger for development
  !window.devToolsExtension && middleware.push(require('./logger').default)  

  // To see all the requests in the chrome Dev tools in the network tab.
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
}

const enhancer = [autoRehydrate(), applyMiddleware(...middleware)]
window.devToolsExtension && enhancer.push(window.devToolsExtension())

// mount it on the Store
const store = createStore(
  rootReducer,
  initialState,
  // if you use getStoredState then no need to use auto hydrate to get state back
  compose(...enhancer),
)

// then run the saga
sagaMiddleware.run(rootSaga)

// Enable persistence, give the callback, should not store the redux-form
const configureStore = callback =>   {  
  // callback(store)
  persistStore(store, {storage: AsyncStorage, blacklist: ['form']}, ()=> callback(store))  
    // .purge(['search'])
}

export default configureStore