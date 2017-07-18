import React, { Component } from 'react'
import { NativeModules, View } from 'react-native'
import { StyleProvider } from 'native-base'

import getTheme from '~/theme/components'
import material from '~/theme/variables/material'

import Toasts from './components/Toasts'
// import Popover from '~/ui/components/Popover'
import { connect } from 'react-redux'

// should show error if not found
import * as authSelectors from '~/store/selectors/auth'

import Drawer from './components/Drawer'
import Navigator from './routes'

import Login from './containers/Login'

const UIManager = NativeModules.UIManager
// only connect to login, so when user logout, the login will be show
@connect(state=>({  
  isLogged: authSelectors.isLogged(state),
}))
export default class App extends Component {    

  componentWillMount() {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)        
  }

  render() {        
    const {isLogged} = this.props   
    return (            
      <StyleProvider style={getTheme(material)}>  
        <View style={{flex:1}}>  
          {isLogged ? <Navigator/> : <Login/>}                                                
          <Toasts/>              
        </View>  
      </StyleProvider>          
    )
  }
}

