import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { Content,Text, List, ListItem, 
  Container, Left, Right, Badge, Button, View, StyleProvider, getTheme, variables,
  Spinner, Thumbnail,
} from 'native-base'

// import CacheableImage from '~/ui/components/CacheableImage'
import * as authActions from '~/store/actions/auth'

import options from './options'
import routes from '~/ui/routes'
import Icon from '~/ui/elements/Icon'
import styles from './styles'

import { avatarImage } from '~/assets'

import {  
  API_BASE
} from '~/store/constants/api'

@connect(null, authActions)
export default class extends Component {  

  _handleLogout = (e) => {    
    // this.props.logout(this.props.token) 
    const {setAuthState} = this.props    
    setAuthState(false)      
  }

  render() {
    
    const {items, navigation} = this.props    
    return (      
      
        <Content
          bounces={false}
          style={styles.container}
        >                
          <View style={styles.drawerCover}>
            <Image source={avatarImage}
              placeholder={<Icon name="image" style={styles.drawerImage}/>} 
              style={styles.drawerImage}/>    
          </View>
          <View style={styles.listItemContainer}>
            {items.map((item, index) =>
                <ListItem noBorder key={item.key} button onPress={e => navigation.navigate(item.routeName)} >
                  <Left>                    
                    <Icon name={options.listItems[index].icon} style={styles.icon} />
                    <Text style={styles.iconText}>{options.listItems[index].name}</Text>
                  </Left>                
                </ListItem>)}
            
            <ListItem noBorder button onPress={this._handleLogout} >
              <Left>                  
                <Text style={styles.iconTextLast}>Log Out</Text>
              </Left>                
            </ListItem>
          </View>          
        </Content>
      
    );
  }
}