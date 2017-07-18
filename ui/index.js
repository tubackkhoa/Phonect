import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import App from './app'
import { Provider } from 'react-redux'
import configureStore from '~/store/config'
import { forwardTo } from '~/store/actions/common'
import Preload from './containers/Preload'

StatusBar.setBarStyle('light-content')

if (!window.navigator.userAgent) {
  window.navigator.userAgent = 'react-native'
}

// vitualize only, no update or connect
export default class extends Component {

  constructor(props) {
    super(props)    
    this.store = null        
  }

  componentDidMount(){
    configureStore(store=> {      
      this.store = store
      this.forceUpdate()       
    })
  }

  shouldComponentUpdate(){
    return false
  }

  render() {        
    // should have a pre-load page
    if(!this.store)
      return ( <Preload message="Initializing..."/> )

    return (
      <Provider store={this.store}>
        <App/>        
      </Provider>
    )
  }
}

