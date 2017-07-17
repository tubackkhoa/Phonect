import { NavigationActions } from 'react-navigation'

import {AppNavigator} from '~/ui/routes'

// home is like the root page, the very first one to go 
const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('home')
)

const getNavAction = action => {
  switch (action.type) {
    case 'navigate/reset':
        return NavigationActions.reset(action.payload)

    case 'navigate/push':      
        return NavigationActions.navigate(action.payload)

    case 'navigate/pop':      
        return NavigationActions.back(action.payload)

    // by default, allow user to use react-navigation directly, it may cause performance a little
    default:      
      return action    
  }
}

export const nav = (state = initialState, action) =>   
  AppNavigator.router.getStateForAction(getNavAction(action), state) || state      
