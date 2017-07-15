import { combineReducers } from 'redux'
// import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import { reducer as form } from 'redux-form'
import { requests, toast, drawer } from './common'
import { auth } from './auth'
import { nav } from './nav'

// a rootReducer is like a single state, key is function return a sub state value
const rootReducer = combineReducers({    
  form,
  ui: combineReducers({
    // ui reducer should be placed here    
    toast,
    drawer,
  }),  
  requests,   
  auth,
  nav,
})

export default rootReducer

