import React, { Component } from 'react'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail,
    Text, Item, View, Input, Left, Body, Tab, Right,
} from 'native-base'

// import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Content from '~/ui/components/Content'
import Icon from '~/ui/elements/Icon'
import { connect } from 'react-redux'
import * as commonActions from '~/store/actions/common'
import * as authSelectors from '~/store/selectors/auth'
import * as commonSelectors from '~/store/selectors/common'
import * as campaignSelectors from '~/store/selectors/campaign'
import * as campaignActions from '~/store/actions/campaign'
import material from '~/theme/variables/material'
import { avatarImage } from '~/assets'

import styles from './styles'


// @firebaseConnect([
//   '/todos'
//   // { path: '/todos' } // object notation
// ])
@connect(state=>({  
  // todos: dataToJS(state.firebase, '/todos'), // path of firebase data
  // token: authSelectors.getToken(state),
  // activeCampaign: campaignSelectors.getActiveCampaign(state),
  // getActiveCampaignRequest: commonSelectors.getRequest(state, 'getActiveCampaign'),  
}), commonActions)
export default class extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // refreshing: false,
      selected: null,
    }    
  }

  componentWillMount(){
    this.componentWillFocus()
  }

  componentWillFocus(){
    // this.setState({
    //   refreshing: false,
    // })        
  }

  _onRefresh =() => {
    // this.setState({refreshing: true})    
    // const { firebase, todos } = this.props
    // firebase.push('/todos', { text:'new value', done:false })
    //   .then(() => this.setState({ refreshing: false }))                
  }    

  renderProfileHeader(){
    return (
      <ListItem avatar noBorder style={styles.profileHeaderContainer}>
          <Left>
              <Thumbnail style={styles.thumb} source={avatarImage}/>
          </Left>
          <Body style={{marginLeft:10}}>
              <Text large>Willie Stewart</Text>                        
              <Text>Sale</Text>
          </Body>
          <Right style={styles.rightContainer}>                    
            <Button iconRight noPadder transparent>
              <Icon red name="busy" style={styles.iconLarge}/> 
            </Button>
          </Right>
      </ListItem> 
    )
  }

  renderStatusOption(title, icon, color, style){
    return (
      <Col style={{
        ...styles[icon === this.state.selected ? 'optionContainerActive' : 'optionContainer'], 
        ...style
      }}>
        <Button transparent onPress={()=>this.setState({selected:icon})} style={styles.optionButton}>
          <Icon name={icon} style={{...styles.optionIcon, color}} />    
          <Text style={styles.optionText}>{title}</Text>                      
        </Button>        
      </Col>
    )
  }

  render() {    
        
    return (          
       
        <Container>
                    
            <Content padder>             
              {this.renderProfileHeader()}
              <View style={styles.statusPanelContainer}>
                <Text>Update your status</Text>

                <Grid style={styles.statusOptionsContainer}>
                  <Row>
                    {this.renderStatusOption('Available', 'available', material.greenColor, {borderTopLeftRadius:10})}
                    {this.renderStatusOption('Busy', 'busy', material.redColor, {borderTopRightRadius:10})}
                  </Row>
                  <Row>
                    {this.renderStatusOption('Meeting', 'meeting', material.violetColor)}
                    {this.renderStatusOption('Gone home', 'home', material.blackColor)}
                  </Row>
                  <Row>
                    {this.renderStatusOption('Away', 'away', material.yellowColor)}
                    {this.renderStatusOption('Sick', 'sick', material.redColor)}
                  </Row>
                  <Row>                          
                    {this.renderStatusOption('Holiday', 'holiday', material.blueColor, {borderBottomLeftRadius:10, borderBottomRightRadius:10})}            
                  </Row>
                </Grid>

              </View>
                        
            </Content>            
            
        </Container>
      
    )
  }
}