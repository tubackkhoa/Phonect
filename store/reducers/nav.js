import { NavigationActions } from 'react-navigation'

import {AppNavigator} from '~/ui/routes'

// home is like the root page, the very first one to go 
const firstAction = AppNavigator.router.getActionForPathAndParams('home')
const initialState = AppNavigator.router.getStateForAction(
  firstAction,
)

export const nav = (state = initialState, action) => {  
  switch (action.type) {
      case 'navigate/reset':
      return AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate(action.payload)]          
        }), state)      

    case 'navigate/push':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate(action.payload), state)    

    case 'navigate/pop':
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(action.payload), state)  

    // by default, allow user to use react-navigation directly, it may cause performance a little
    default:      
      return AppNavigator.router.getStateForAction(action, state) || state      
  }
  
}