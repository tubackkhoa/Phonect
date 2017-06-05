import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { 
  Container, Button, List, Left, Right, Body,
  ListItem, InputGroup, Input, Picker, Text, Thumbnail,
  Form, Item, Switch, View,
} from 'native-base'

import styles from '../shared/styles'

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
      <ListItem avatar style={{
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingTop: 10,
      }}>
        <View style={{
          flexDirection: 'row',          
          flex: 1,
          paddingRight: 15,
          justifyContent: 'space-between',
        }}>
          <View>
              <Text large>Willie Stewart</Text>                        
              <Text>84 123 456 78</Text>

              <Text style={{
                marginTop: 10,
              }} note>Name of company</Text>
              <Text note>Agiletech.vn</Text>
          </View>
                          
          <View style={styles.avatarContainer}>      
            <Image source={avatarImage} style={styles.avatar}/>
            <PhotoChooser icon="add" style={styles.photoIcon} 
              iconStyle={{
                fontSize: 14,
                color: material.blueColor,                  
              }}
              onSuccess={this._handleChoosePhoto}/>                    
          </View> 

          </View>
      </ListItem> 
    )
  }
  
  renderSecondOption(){
    return (
      <ListItem last={true}>                        
        <View style={{
          flexDirection: 'column',        
        }}>
          <Text left>Your subscription</Text>
          <View row style={{
            marginTop: 10,
          }}>
            <Text active large>Silver</Text>
          </View>
          <View row>
            <Text active large>$99</Text>
            <Text note style={{
              marginTop: 5,
            }}>/ month</Text>
          </View>
        </View>
        <Right>

          <Image source={subscriptionImage} style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}>
            <Text large style={{
              color: '#fff',
              alignSelf:'center',
              marginTop: 45,
            }}>Silver</Text>
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
          <View style={{
            width: '100%',
            marginTop: 10,
            paddingBottom: 10,            
            flexDirection: 'row',  
            justifyContent: 'space-around',
          }}>

            
              <Icon gray name="hover-sim-card" style={{
                fontSize: 50,
              }}/>
            
              <Icon active name="new-sim-card" style={{
                fontSize: 50,
              }}/>
            
          </View>          
        </View>        
      </ListItem>
    )
  }

  render() {        

  
    return (
      <Container>                                           
        <Content padder>                          
          <View phonect style={{
            marginTop: 5,
          }}>            
            {this.renderFirstOption()}                                                      
            {this.renderSecondOption()}  
            <ListItem>
              <View style={{
                marginTop: -10,
                justifyContent: 'space-around',
              }}>
                <Button rounded primary iconLeft style={{flex:1, marginBottom: 10}}>                  
                  <Text style={{...styles.textSmall, width: '100%', textAlign: 'center'}}>
                    Change subscription
                  </Text>
                </Button>
                <Button rounded primary iconLeft style={{flex:1}}>                  
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


