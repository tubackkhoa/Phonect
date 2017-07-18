import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  isAuth: false
})

export default (state=initialState, {type, payload}) => {
  switch(type){
    case 'auth/setAuthState':
      return state.set('isAuth', payload)
    default:
      return state
  }  
}

