import React, { Component } from 'react'
import { Linking } from 'react-native'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail, DefaultTabBar,
    Text, Item, View, Input, Left, Body, Tab, Right,
} from 'native-base'

import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form'
import commonActions from '~/store/actions/common'

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
}), commonActions)
@reduxForm({ form: 'CallForm', validate})
export default class extends Component {  

  constructor(props) {
      super(props)      
      const phoneNumber = '01214149420'
      this.state = {
          phoneNumber,
      }

      this.phoneData = phoneNumber.split()
  }

  _handleClear() {      
      this.phoneData = []
      this.setState({phoneNumber: this.phoneData.join('')})
  }

  _handleDelete() {
      this.phoneData.pop()
      this.setState({phoneNumber: this.phoneData.join('')})
  }

  _handleKeyPress(key) {
      this.phoneData.push(key)
      this.setState({phoneNumber: this.phoneData.join('')})
  }

  _handleCallFromMobile() {
    const phoneURL = `'tel:${this.state.phoneNumber}`
    Linking.canOpenURL(phoneURL).then(supported => {
      if (!supported) {
        this.props.setToast('Can\'t handle url: ' + url, 'warn')
      } else {
        return Linking.openURL(phoneURL)
      }
    }).catch(err => console.error('An error occurred', err))    
  }

  render() {

    const phoneNumberFormatted = this.state.phoneNumber.length 
      ? this.state.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      : 'XXX-XXX-XXXX'

    return (          
       
        <Container>         
            
            <Content style={{marginBottom:20}}>   

              <View style={styles.inputContainer}>
                <Text
                  small
                  active>Type number</Text>
                <Text style={styles.textLarge}>{phoneNumberFormatted}</Text>
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
                  onPress={this._handleCallFromMobile.bind(this)}
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
