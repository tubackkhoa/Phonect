import React, { Component } from 'react'

import {         
    Footer, FooterTab, Button,         
    Text, Badge, View,
} from 'native-base'

import Icon from '~/ui/elements/Icon'
import options from './options'
import styles from './styles'

export default class extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      type: props.type,
      route: props.route,
    }
  }

  tabClick(route){
    const {onTabClick} = this.props
    onTabClick && onTabClick(this.state.type, route)
  }

  show(type, route){
    this.setState({type, route})
  } 

  renderFooterTabs(route){
    return (                                     
        <Footer style={styles.container}>
            {options.footerItems.map((item, index)=>
            <FooterTab key={index}>              
                <Button active={item.route === route} style={styles.button} onPress={e=>this.tabClick(item.route)} textSmall key={index}>                                        
                  <Icon name={item.icon + (item.route === route ? '-active' : '')} style={styles.footerIcon}/>                                      
                  <Text style={styles.footerText}>{item.name}</Text>
                </Button>
            </FooterTab>
            )}        
        </Footer>            
      )
  }

  render() {
      const {type, route} = this.state
      // event will be invoke via pageInstance
      switch(type){
        case 'none':      
          return false        
        default:
          return this.renderFooterTabs(route)
      }       
  }
}