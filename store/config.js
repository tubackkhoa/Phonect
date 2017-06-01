import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import createSagaMiddleware from 'redux-saga'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'

import rootReducer from './reducers'
import rootSaga from './sagas'

import { FIREBASE_CONFIG } from '~/store/constants/api'

// Add redux Firebase to compose


const initialState = {}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]


// only use logger when there is not devTools
if (__DEV__) {  
  // add logger for development
  !window.devToolsExtension && middleware.push(require('./logger').default)  

  // To see all the requests in the chrome Dev tools in the network tab.
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
}

// const enhancer = [autoRehydrate(), applyMiddleware(...middleware)]
const enhancer = [applyMiddleware(...middleware)]
window.devToolsExtension && enhancer.push(window.devToolsExtension())

const createStoreWithFirebase = compose(
  reactReduxFirebase(FIREBASE_CONFIG, { 
    userProfile: 'users',
    enableLogging: false,
    ReactNative: { AsyncStorage }, 
  }),
  ...enhancer,
)(createStore)

// mount it on the Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  // if you use getStoredState then no need to use auto hydrate to get state back
  // compose(...enhancer),
)

// then run the saga
sagaMiddleware.run(rootSaga)

// Enable persistence, give the callback
const configureStore = callback =>   {  
  // callback(store)
  persistStore(store, {storage: AsyncStorage}, ()=> callback(store))  
}

export default configureStore