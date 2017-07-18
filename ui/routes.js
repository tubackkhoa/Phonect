import React, { Component } from 'react'

import Preload from './containers/Preload'
import Home from './containers/Home'
import UserSetting from './containers/User/Setting'
import People from './containers/People/Index'
import PeopleDetail from './containers/People/Detail'
import Data from './containers/Data'
import Call from './containers/Call'
import Footer from './components/Footer'
import { connect } from 'react-redux'
import { addNavigationHelpers, DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'
import SideBar from './components/SideBar'

const PeopleStack = StackNavigator({
    list: {
        screen: People
    },
    detail: {
        screen: PeopleDetail
    }
},{
    headerMode: 'none',
})

const HomeTab = TabNavigator({
  home: {
    screen: Home
  },
  setting: {        
      screen: UserSetting,
  }, 
  people: {        
      screen: PeopleStack,        
  },
  call: {        
      screen: Call,
  },
  data: {        
      screen: Data,
  },
},
{
  headerMode: 'none',
  lazy: true,
  tabBarComponent: Footer,   
  tabBarPosition: 'bottom',   
  animationEnabled: true,
  swipeEnabled: true,
  renderIndicator: Preload
})


// default route Stack
export default DrawerNavigator({             
    home: {        
        screen: HomeTab
    },
    setting: {        
        screen: UserSetting,
    },                
    people: {        
        screen: PeopleStack,        
    },
    call: {        
        screen: Call,
    },
    data: {        
        screen: Data,
    },
}, {    
    drawerPosition: 'left',
    contentComponent: props => <SideBar {...props} />  
})
  

