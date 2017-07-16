import { NavigationActions } from 'react-navigation'

import {AppNavigator} from '~/ui/routes'

// home is like the root page, the very first one to go 
const firstAction = AppNavigator.router.getActionForPathAndParams('home')
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
)

export const nav = (state = initialNavState, action) => 
  AppNavigator.router.getStateForAction(action, state) || state