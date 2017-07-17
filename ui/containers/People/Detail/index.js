import React, { Component } from 'react'
import {                 
    Button, Text, Label, Container, Header, Title, Right, Body,
    ListItem, Item, View, Input, CheckBox, Left,
} from 'native-base'

import Content from '~/ui/components/Content'
import { validate, renderGroupPermission } from './utils'

import { connect } from 'react-redux'
import * as commonActions from '~/store/actions/common'

import Icon from '~/ui/elements/Icon'
import styles from './styles'

// navigate directly via key in tab, so it is like facebook, view user detail
// then go home, then go to people tab, then go back to list
// if tabs in stack, each tabs collection can be a screen in stack route with 
// random id, so we can not indentify the exact one, must go back, must 
// follow the navigation rule !!!

@connect(null, commonActions)
export default class extends Component {
  render() {
    const { navigation, goBack, forwardTo } = this.props           
    return (
      <Container>
          <Header noShadow>  
            <Left>
              <Button transparent onPress={()=>goBack()}>
                <Icon name="keyboard-arrow-left"/>
              </Button>  
            </Left>                
            <Body><Title full>{navigation.state.params.name}</Title></Body>   
            <Right/>     
          </Header> 

          <Content padder>
            <Text>Detail</Text> 
            <Button              
              onPress={()=> forwardTo('home')}
              style={styles.button}
              block>
              <Text>Go Home</Text>
            </Button>           
          </Content>
      </Container>
    )
  }
}