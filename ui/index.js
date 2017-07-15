import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import App from './app'
import { Provider } from 'react-redux'
import configureStore from '~/store/config'
import { forwardTo } from '~/store/actions/common'
import Preload from './containers/Preload'
// import OneSignal from 'react-native-onesignal'
// import { RootStack } from './routes'
// import firebase from 'firebase'

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
      // reload app             
      // store.dispatch(forwardTo(firstRoute, true))    
      // this.navigator = RootStack({initialRouteName: firstRoute})     
      this.store = store
      this.forceUpdate()
      // console.log(this.navigator)
      // firebase.auth().onAuthStateChanged(user => {        
      //   const firstRoute = user ? 'home' : 'login'
      //   store.dispatch(forwardTo(firstRoute, true))
      //   this.store = store
      //   this.forceUpdate()
      // })         
    })
  }

  // componentWillMount() {    
  //     OneSignal.addEventListener('received', this.onReceived);
  //     OneSignal.addEventListener('opened', this.onOpened);
  //     OneSignal.addEventListener('registered', this.onRegistered);
  //     OneSignal.addEventListener('ids', this.onIds);
  // }

  // componentWillUnmount() {
  //     OneSignal.removeEventListener('received', this.onReceived);
  //     OneSignal.removeEventListener('opened', this.onOpened);
  //     OneSignal.removeEventListener('registered', this.onRegistered);
  //     OneSignal.removeEventListener('ids', this.onIds);
  // }

  // onReceived(notification) {
  //     console.log("Notification received: ", notification);
  // }

  // onOpened(openResult) {
  //   console.log('Message: ', openResult.notification.payload.body);
  //   console.log('Data: ', openResult.notification.payload.additionalData);
  //   console.log('isActive: ', openResult.notification.isAppInFocus);
  //   console.log('openResult: ', openResult);
  // }

  // onRegistered(notifData) {
  //   console.log("Device had been registered for push notifications!", notifData);
  // }

  // onIds(device) {
  //   // console.log('Device info: ', device);
  // }

  shouldComponentUpdate(){
    return false
  }

  render() {        
    // should have a pre-load page
    if(!this.store)
      return ( <Preload message="Initializing..."/> )

    // const firstRoute = this.store.getState().auth.loggedIn ? 'home' : 'login'
    // console.log(firstRoute)

    return (
      <Provider store={this.store}>
        <App/>        
      </Provider>
    )
  }
}

