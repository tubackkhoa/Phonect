import React, { Component } from 'react'
import {                 
    Tabs, ScrollableTab, TabHeading, Text,
} from 'native-base'
import styles from './styles'


export default class extends Component {
  render() {
    const {style, ...props} = this.props
    return (                         
      <Tabs {...props} renderTabBar={props => <ScrollableTab 
        underlineStyle={{
          height: 5,          
          borderRadius:2.5,
        }}
        style={{...styles.tab, ...style}} tabsContainerStyle={styles.tabContainer} />}/>      
    )
  }
}
