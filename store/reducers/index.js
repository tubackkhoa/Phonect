import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import auth from './auth'

const rootReducer = combineReducers({    
  form,   
  auth,  
})

export default rootReducer

