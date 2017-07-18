import { combineReducers } from 'redux'
// import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import { reducer as form } from 'redux-form'
import { requests, toast } from './common'
import { auth } from './auth'

// a rootReducer is like a single state, key is function return a sub state value
const rootReducer = combineReducers({    
  form,
  ui: combineReducers({
    // ui reducer should be placed here    
    toast,
  }),  
  requests,   
  auth,
  // nav,
})

export default rootReducer

