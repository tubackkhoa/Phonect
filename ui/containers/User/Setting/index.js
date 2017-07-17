import React, { Component } from 'react'
import {             
    Button, Icon, List, ListItem, Switch,
    Container, Text, Item, Input, Left, Body, Right, View,
} from 'native-base'

import Content from '~/ui/components/Content'
import Header from '~/ui/components/Header'

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
// import { firebaseConnect, pathToJS, isLoaded } from 'react-redux-firebase'

import * as commonActions from '~/store/actions/common'
import * as authActions from '~/store/actions/auth'

import { 
  SwitchField,
} from '~/ui/elements/Form'
import { validate } from './utils'
import options from './options'
import styles from './styles'

@connect(null, {...commonActions, ...authActions})
@reduxForm({ form: 'SettingForm', validate})
export default class extends Component {
  _handleLogout(){
    const {setAuthState, forwardTo} = this.props    
    setAuthState(false)
    // after logout => reset?    
    // after logout, reset tab to home !!!
    forwardTo('home', true)    
  }

  renderOption(option, key){
    const {forwardTo} = this.props
    return (
      <View
        style={styles.container}
        key={key}>
        {option.title && 
          <ListItem
            noBorder
            style={styles.itemHeader}>
            <Text style={styles.itemHeaderText}>{option.title}</Text>
          </ListItem>
        }

        <View>
          {option.items.map((item, index) =>
            <ListItem
              style={styles.itemToggle}
              key={index}>
              <Text style={styles.itemToggleText}>{item.title}</Text>   
              <Right>          
              {item.type === 'toggle' 
              ? <Field name={item.name} component={SwitchField} />           
              : <Icon gray style={styles.iconRight} name="keyboard-arrow-right" />                
              }
              </Right>
            </ListItem>
          )}          
        </View>
      </View>
    )
  }

  render() {
    const {route, forwardTo} = this.props       
    return (                 
        <Container>      
            <Header title="Settings" />              
            <Content padder>
                {options.listItems.map((item, index)=>this.renderOption(item, index))}

                <Button
                  onPress={this._handleLogout.bind(this)}
                  rounded
                  primary
                  iconLeft
                  style={{flex:1, marginTop: 40, marginLeft: 10, marginRight:10}}>
                  <Text style={{fontSize: 14, width: '100%', textAlign: 'center'}}>
                    Logout
                  </Text>
                </Button>

            </Content>                   
        </Container>      
    )
  }
}