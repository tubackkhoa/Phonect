import React, { Component } from 'react'
import Home from './containers/Home'
import UserSetting from './containers/User/Setting'
import People from './containers/People/Index'
import PeopleDetail from './containers/People/Detail'
import Data from './containers/Data'
import Call from './containers/Call'
import Footer from './components/Footer'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'

export const AppNavigator = TabNavigator({             
    home: {        
        screen: Home,
    },
    setting: {        
        screen: UserSetting,
    },            
    // people is a stack, stack must goBack, unlike tab can navigate directly
    // via key-unique, stack generate key randomly
    people: {        
        screen: StackNavigator({
            list: {
                screen: People
            },
            detail: {
                screen: PeopleDetail
            }
        },{
            headerMode: 'none',
        }),        
    },
    call: {        
        screen: Call,
    },
    data: {        
        screen: Data,
    },
}, {  
  headerMode: 'none',
  // with lazy, we can use preload in the tab to show the preloading
  // which will be much faster instead of trigger all componentDidMount
  // and render all, just render when active, and we will have preload before 
  // getting real data to work on
  lazy: true,
  tabBarComponent: Footer,   
  tabBarPosition: 'bottom',   
  animationEnabled: true,
  swipeEnabled: true,
})
    

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

// each component should connect to only one redux-store-key
// so the update will be faster, without checking in render method, only check from
// redux outside
const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)


