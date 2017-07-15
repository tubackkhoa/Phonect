import React, { Component } from 'react'
import { Drawer } from 'native-base'
import { connect } from 'react-redux'

import SideBar from '~/ui/components/SideBar'
import { getDrawerState } from '~/store/selectors/common'
import * as commonActions from '~/store/actions/common'

@connect(state=>({
  drawerState: getDrawerState(state),    
}), commonActions)
export default class extends Component {  
  render(){
    const {drawerState, closeDrawer, ...props} = this.props
    return (
      <Drawer          
          open={drawerState === 'opened'}
          type="displace"     
          content={<SideBar />}        
          negotiatePan={true}
          tweenDuration={200}
          useInteractionManager={true}    
          onClose={closeDrawer}       
          {...props}
      />
    )
  }
}