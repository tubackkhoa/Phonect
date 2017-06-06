import React, { Component } from 'react'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail, DefaultTabBar,
    Text, Item, View, Input, Left, Body, Tab, Right,
} from 'native-base'

import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form'

import { 
  InputField,
} from '~/ui/elements/Form'

import Icon from '~/ui/elements/Icon'
import Content from '~/ui/components/Content'
import Keyboard from '~/ui/components/Keyboard'
import styles from './styles'
import { validate } from './utils'

@connect(state=>({  
  initialValues: {    
  },
}))
@reduxForm({ form: 'CallForm', validate})
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
            
            <Content>   

              <View style={styles.inputContainer}>
                <Text
                  small
                  active>Type number</Text>
                <Text style={styles.textLarge}>XXX-XXX-XXX</Text>
              </View>

              <View style={{marginBottom: 10}}>
                <Keyboard 
                    isRenderDot={true}
                    onClear={this._handleClear.bind(this)}
                    onDelete={this._handleDelete.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}/>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  rounded
                  style={styles.oneHalf}
                  primary
                  iconLeft>
                  <Icon name="mobile" />
                  <Text style={styles.textSmall}>Call from mobile</Text>
                </Button>
                <Button
                  rounded
                  style={styles.oneHalf}
                  primary
                  iconLeft>
                  <Icon name="company" />
                  <Text style={styles.textSmall}>Call from company</Text>
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  rounded
                  success
                  iconLeft
                  style={{flex:1}}>
                  <Icon
                    name="sms"
                    style={styles.iconSMS} />
                  <Text style={{...styles.textSmall, width: '100%', textAlign: 'center'}}>SMS from company</Text>
                </Button>
              </View>              
            </Content>
            
        </Container>
      
    )
  }
}
