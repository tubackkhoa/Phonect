import React, { Component } from 'react'
import {                 
    Button, Text, Label, Container, Header, Title, Right, Body,
    ListItem, Item, View, Input, CheckBox, Left,
} from 'native-base'

import Content from '~/ui/components/Content'
import { validate, renderGroupPermission } from './utils'

import Icon from '~/ui/elements/Icon'
import styles from './styles'


export default class extends Component {
  render() {
    const { navigation } = this.props           
    return (
      <Container>
          <Header noShadow>  
            <Left>
              <Button transparent onPress={()=>navigation.goBack()}>
                <Icon name="keyboard-arrow-left"/>
              </Button>  
            </Left>                
            <Body><Title full>{navigation.state.params.name}</Title></Body>   
            <Right/>     
          </Header> 

          <Content padder>
            <Text>Detail</Text> 
            <Button              
              onPress={()=> navigation.navigate('home')}
              style={styles.button}
              block>
              <Text>Go Home</Text>
            </Button>           
          </Content>
      </Container>
    )
  }
}