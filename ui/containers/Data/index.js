import React, { Component } from 'react'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail,
    Text, Item, View, Input, Left, Body, Tab, Right,
} from 'native-base'

import Content from '~/ui/components/Content'
import { connect } from 'react-redux'
import * as delegationActions from '~/store/actions/delegation'
import * as commonActions from '~/store/actions/common'
import * as authSelectors from '~/store/selectors/auth'
import * as delegationSelectors from '~/store/selectors/delegation'

import { formatDate } from '~/ui/shared/utils'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'

// import CacheableImage from '~/ui/components/CacheableImage'
import Tabs from '~/ui/components/Tabs'

import Icon from '~/ui/elements/Icon'
import styles from './styles'

import { API_BASE } from '~/store/constants/api'
import { avatarImage } from '~/assets'

@connect(state=>({
  // token: authSelectors.getToken(state),
  // delegation: delegationSelectors.getDelegation(state),
}), commonActions)
export default class extends Component {

  // constructor(props) {
  //   super(props)
  // }

  // componentWillMount(){
  //   this.componentWillFocus()
  // }

  // componentWillFocus(){        
    
  // }

  render() {    

    return (          
       
        <Container>         

            <Tabs>
                <Tab style={styles.container} heading="This month">                    
                    <Tab1/>                                        
                </Tab>
                <Tab style={styles.container} heading="Last 6 months">
                    <Tab2/> 
                </Tab>
                <Tab style={styles.container} heading="Subscription">
                    <Tab3/>
                </Tab>
            </Tabs>   
            
        </Container>
      
    )
  }
}