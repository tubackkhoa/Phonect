import React, { Component } from 'react'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail,
    Text, Item, View, Input, Left, Body, Tab, Right,
} from 'native-base'

import Content from '~/ui/components/Content'
import { connect } from 'react-redux'
import * as delegationActions from '~/store/actions/delegation'
import * as commonActions from '~/store/actions/common'
import * as authSelectors from '~/store/selectors/auth'
import * as delegationSelectors from '~/store/selectors/delegation'

import { formatDate } from '~/ui/shared/utils'

import CacheableImage from '~/ui/components/CacheableImage'
import Tabs from '~/ui/components/Tabs'

import Icon from '~/ui/elements/Icon'

import options from './options'
import styles from './styles'

import { API_BASE } from '~/store/constants/api'
import { avatarImage } from '~/assets'

@connect(state=>({
  // token: authSelectors.getToken(state),
  // delegation: delegationSelectors.getDelegation(state),
}), commonActions)
export default class extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   refreshingIn: false,
    //   refreshingOut: false,
    // }
  }

  componentWillMount(){
    this.componentWillFocus()
  }

  componentWillFocus(){        
    // const {token, delegation, getListDelegation} = this.props
    // later we have the network
    // !delegation['DelegationIn'] && getListDelegation(token, 'DelegationIn')
    // !delegation['DelegationOut'] && getListDelegation(token, 'DelegationOut')
    
    // always stop refreshing
    // this.setState({
    //   refreshingIn: false,
    //   refreshingOut: false,
    // })
    
  }

  // _onRefreshIn =() => {
  //   this.setState({refreshingIn: true})
  //   this.props.getListDelegation(this.props.token, 'DelegationIn', ()=>this.setState({refreshingIn: false}))    
  // }   

  // _onRefreshOut =() => {
  //   this.setState({refreshingOut: true})
  //   this.props.getListDelegation(this.props.token, 'DelegationOut', ()=>this.setState({refreshingOut: false}))    
  // }  

  renderList(list){
    const {forwardTo} = this.props    

    return (
      <View style={styles.content} >
        {list.map((item, index) =>
          <ListItem key={index} avatar noBorder style={styles.listItemContainer}>
              <Left>
                  <Thumbnail style={styles.thumb} source={avatarImage}/>
              </Left>
              <Body>
                  <Text style={styles.textLarge}>Ruth Dennis</Text>                        
                  <Text>Sale</Text>
              </Body>
              <Right style={styles.rightContainer}>                                              
                <Button iconRight noPadder transparent>                  
                  <Icon green large name="available" /> 
                </Button>
              </Right>
          </ListItem>   
        )} 
      </View>
    )
  }

  render() {    

    return (          
       
        <Container>         

            <Tabs activeTextColor='red'>
                <Tab style={styles.container} heading="All">
                    <Content>     
                        {this.renderList(options.list)}                      
                    </Content>
                </Tab>
                <Tab style={styles.container} heading="Admin">
                    <Content> 
                        {this.renderList(options.list)}                      
                    </Content>
                </Tab>
                <Tab style={styles.container} heading="Sale">
                    <Content> 
                        {this.renderList(options.list)}                      
                    </Content>
                </Tab>
                <Tab style={styles.container} heading="Support">
                    <Content> 
                        {this.renderList(options.list)}                      
                    </Content>
                </Tab>
            </Tabs>   
            
        </Container>
      
    )
  }
}