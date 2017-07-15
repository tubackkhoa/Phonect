import React, { Component } from 'react'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail,
    Text, Item, View, Input, Left, Body, Tab, Right, Header, Title,
} from 'native-base'

// import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Content from '~/ui/components/Content'
// import Header from '~/ui/components/Header'
import Icon from '~/ui/elements/Icon'
import { connect } from 'react-redux'
import * as commonActions from '~/store/actions/common'
import * as authSelectors from '~/store/selectors/auth'
import * as commonSelectors from '~/store/selectors/common'
import * as campaignSelectors from '~/store/selectors/campaign'
import * as campaignActions from '~/store/actions/campaign'
import material from '~/theme/variables/material'
import { avatarImage } from '~/assets'

import options from './options'
import styles from './styles'

@connect(state=>({  

}), commonActions)
export default class extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: 'busy',
    }    
  }

  // _onRefresh =() => {
  //   // this.setState({refreshing: true})        
  //   // firebase.push('/todos', { text:'new value', done:false })
  //   //   .then(() => this.setState({ refreshing: false }))                
  // }    

  renderProfileHeader(){
    const {selected} = this.state
    const color = options.colorMap[selected]
    return (
      <ListItem
        avatar
        noBorder
        style={styles.profileHeaderContainer}>
          <Left>
              <Thumbnail
                style={styles.thumb}
                source={avatarImage}/>
          </Left>
          <Body>
              <Text large>Willie Stewart</Text>                        
              <Text>Sale</Text>
          </Body>
          <Right style={styles.rightContainer}>                                
            <Button
              iconRight
              noPadder
              transparent>
              <Icon
                red
                name={selected} 
                style={{...styles.iconLarge, color}}/>
            </Button>
          </Right>
      </ListItem> 
    )
  }

  renderStatusOption(title, icon, style){
    const color = options.colorMap[icon] 
    return (
      <Col style={{
        ...styles[icon === this.state.selected ? 'optionContainerActive' : 'optionContainer'], 
        ...style
      }}>
        <Button
          transparent
          onPress={()=>this.setState({selected:icon})}
          style={styles.optionButton}>
          <Icon
            name={icon}
            style={{...styles.optionIcon, color}} />
          <Text style={styles.optionText}>{title}</Text>                      
        </Button>        
      </Col>
    )
  }

  render() {    

    const { openDrawer } = this.props
        
    return (          
       
        <Container>
            <Header noShadow>  
              <Left>
                <Button transparent onPress={openDrawer}>
                  <Icon name="menu"/>
                </Button>  
              </Left>                
              <Body><Title full>Home</Title></Body>   
              <Right/>     
            </Header> 
                    
            <Content padder>             
              {this.renderProfileHeader()}
              <View style={styles.statusPanelContainer}>
                <Text>Update your status</Text>

                <Grid style={styles.statusOptionsContainer}>
                  <Row>
                    {this.renderStatusOption('Available', 'available', {borderTopLeftRadius:10})}
                    {this.renderStatusOption('Busy', 'busy', {borderTopRightRadius:10})}
                  </Row>
                  <Row>
                    {this.renderStatusOption('Meeting', 'meeting')}
                    {this.renderStatusOption('Gone home', 'home')}
                  </Row>
                  <Row>
                    {this.renderStatusOption('Away', 'away')}
                    {this.renderStatusOption('Sick', 'sick')}
                  </Row>
                  <Row>                          
                    {this.renderStatusOption('Holiday', 'holiday', {borderBottomLeftRadius:10, borderBottomRightRadius:10})}            
                  </Row>
                </Grid>

              </View>
                        
            </Content>            
            
        </Container>
      
    )
  }
}