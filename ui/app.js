import React, { Component } from 'react'
import { NativeModules } from 'react-native'
import { StyleProvider } from 'native-base'

import getTheme from '~/theme/components'
import material from '~/theme/variables/material'

import { connect } from 'react-redux'

import Navigator from './routes'
import Login from './containers/Login'

const UIManager = NativeModules.UIManager
// only connect to login, so when user logout, the login will be show
@connect(state=>({  
  isLogged: state.getIn('auth', 'isAuth'),
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
        {isLogged ? <Navigator/> : <Login/>}                                                                           
      </StyleProvider>          
    )
  }
}

