import React, { Component } from 'react'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail, DefaultTabBar,
    Text, Item, View, Input, Left, Body, Tab, Right,
} from 'native-base'

import { connect } from 'react-redux'

import Content from '~/ui/components/Content'
import Keyboard from '~/ui/components/Keyboard'
import styles from './styles'

export default class extends Component {  

  constructor(props) {
      super(props);
      this.state = {
          text: '123456'
      }
  }

  _handleClear() {
      
  }

  _handleDelete() {
      
  }

  _handleKeyPress(key) {
      
  }

  render() {

    return (          
       
        <Container>         
            
            <Content style={{flex: 1}}>
                <Text style={styles.text}>{this.state.text}</Text>

                <Keyboard 
                    isRenderDot={true}
                    onClear={this._handleClear.bind(this)}
                    onDelete={this._handleDelete.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}
                />
            </Content>
            
        </Container>
      
    )
  }
}
