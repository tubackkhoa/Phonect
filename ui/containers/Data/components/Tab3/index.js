import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { 
  Container, Button, List, Left, Right, Body,
  ListItem, InputGroup, Input, Picker, Text, Thumbnail,
  Form, Item, Switch, View,
} from 'native-base'

import styles from './styles'

import Content from '~/ui/components/Content'
import Icon from '~/ui/elements/Icon'
import Event from '~/ui/components/Event'
import DatePicker from '~/ui/components/DatePicker'
import PhotoChooser from '~/ui/components/PhotoChooser'
import Header from '~/ui/components/Header'
// import Toggle from '~/ui/components/Toggle'
import material from '~/theme/variables/material'

import { avatarImage, subscriptionImage } from '~/assets'
export default class extends Component {  

  renderFirstOption(){
    return (
      <ListItem
        avatar
        style={styles.firstListItemContainer}>
        <View style={styles.firstListItemInnerContainer}>
          <View>
              <Text large>Willie Stewart</Text>                        
              <Text>84 123 456 78</Text>

              <Text style={styles.textOfCompany} note>Name of company</Text>
              <Text note>Phonect</Text>
          </View>
                          
          <View style={styles.avatarContainer}>      
            <Image
              source={avatarImage}
              style={styles.avatar}/>
            <PhotoChooser
              icon="add"
              style={styles.photoIcon}
              iconStyle={styles.iconOfPhotoChooser}
              onSuccess={this._handleChoosePhoto}/>                    
          </View> 

          </View>
      </ListItem> 
    )
  }
  
  renderSecondOption(){
    return (
      <ListItem last={true}>                        
        <View style={styles.secondListItemInnerContainer}>
          <Text left>Your subscription</Text>
          <View
            row
            style={{marginTop: 10}}>
            <Text
              active
              large>Silver</Text>
          </View>
          <View row>
            <Text
              active
              large>$99</Text>
            <Text
              note
              style={{marginTop: 5}}>/ month</Text>
          </View>
        </View>
        <Right>
          <Image
            source={subscriptionImage}
            style={styles.rightImage}>
            <Text
              large
              style={styles.centerText}>Silver</Text>
          </Image>
        </Right>
      </ListItem>
    )
  }

  renderThirdOption(){
    return (
      <ListItem last={true}>                        
        <View>
          <Text left>Your sim card</Text>
          <View style={styles.thirdListItemInnerContainer}>
              <Icon
                gray
                name="hover-sim-card"
                style={styles.thirdListItemIcon}/>
              <Icon
                active
                name="new-sim-card"
                style={styles.thirdListItemIcon}/>
          </View>          
        </View>        
      </ListItem>
    )
  }

  render() {        

  
    return (
      <Container>                                           
        <Content padder>                          
          <View
            phonect
            style={{marginTop: 5}}>
            {this.renderFirstOption()}                                                      
            {this.renderSecondOption()}  
            <ListItem>
              <View style={styles.buttonContainer}>
                <Button
                  rounded
                  primary
                  iconLeft
                  style={{flex:1, marginBottom: 10}}>
                  <Text style={{...styles.textSmall, width: '100%', textAlign: 'center'}}>
                    Change subscription
                  </Text>
                </Button>
                <Button
                  rounded
                  primary
                  iconLeft
                  style={{flex:1}}>
                  <Text style={{...styles.textSmall, width: '100%', textAlign: 'center'}}>
                    View all prices
                  </Text>
                </Button>
              </View>
            </ListItem>
            {this.renderThirdOption()}            
          </View>
        </Content>
      </Container>
    )
  }
}


