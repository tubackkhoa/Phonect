import React, { Component } from 'react'
import { connect } from 'react-redux'
import {         
    Footer, FooterTab, Button,         
    Text, Badge, View,
} from 'native-base'

import Icon from '~/ui/elements/Icon'
import options from './options'
import styles from './styles'

export default class extends Component {

  render() {      
      // navigationState is state.nav
      const {navigationState, navigation} = this.props      
      return (                                     
        <Footer style={styles.container}>
            {navigationState.routes.map((item, index)=>
            <FooterTab key={item.key}>              
                <Button active={navigationState.index === index} style={styles.button} 
                  onPress={e=>navigation.navigate(item.routeName)} textSmall>                                        
                  <Icon name={options.footerItems[index].icon + (navigationState.index === index ? '-active' : '')} style={styles.footerIcon}/>                                      
                  <Text style={styles.footerText}>{options.footerItems[index].name}</Text>
                </Button>
            </FooterTab>
            )}        
        </Footer>            
      )   
  }
}