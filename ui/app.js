import React, { Component } from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'
import { BackAndroid, NativeModules } from 'react-native'
import { Drawer, StyleProvider } from 'native-base'

import getTheme from '~/theme/components'
import material from '~/theme/variables/material'

// import Container from './components/Container'
// import Navigator from './components/Navigator'
import Toasts from './components/Toasts'
// import AfterInteractions from './components/AfterInteractions'
import SideBar from './components/SideBar'
import Preload from './containers/Preload'
// import Header from '~/ui/components/Header'
// import Footer from '~/ui/components/Footer'
import Popover from '~/ui/components/Popover'

// router => render component base on url
// history.push => location match => return component using navigator push
import { connect } from 'react-redux'

// should show error if not found
import { getDrawerState } from '~/store/selectors/common'
import * as commonActions from '~/store/actions/common'

const UIManager = NativeModules.UIManager

@connect(state=>({
  drawerState: getDrawerState(state),
}), commonActions)
export default class App extends Component {    

  // replace view from stack, hard code but have high performance
  componentWillReceiveProps({drawerState}){          
    if(drawerState !== this.props.drawerState){
      this.drawer._root[drawerState === 'opened' ? 'open' : 'close']()
    }    
  }

  // we handle manually to gain performance
  shouldComponentUpdate(nextProps){
    return false
  }


  componentWillMount() {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)        
  }

  // init route with tab, then each page in tab will have stack navigator
  // which will not be cached, but tab at home will be, and it should be
  render() {        
    const {drawerState, closeDrawer, Navigator} = this.props   
    return (            
      <StyleProvider style={getTheme(material)}>         
        <Drawer
          ref={ref => this.drawer = ref}
          open={false}
          type="displace"             
          negotiatePan={true}
          tweenDuration={100}
          useInteractionManager={true}          
          onClose={closeDrawer}
        >                               
          <Navigator/>
          <Toasts/>
          <Popover ref={ref=>this.popover=ref}/>
        </Drawer>   
      </StyleProvider>          
    )
  }
}

