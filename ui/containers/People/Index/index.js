import React, { Component } from 'react'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail,
    Text, Item, View, Input, Left, Body, Tab, Right,
} from 'native-base'

import Content from '~/ui/components/Content'
import { connect } from 'react-redux'

import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS,
  firebase,
} from 'react-redux-firebase'

import * as commonActions from '~/store/actions/common'
import * as authSelectors from '~/store/selectors/auth'

import { formatDate } from '~/ui/shared/utils'

import CacheableImage from '~/ui/components/CacheableImage'
import Tabs from '~/ui/components/Tabs'

import Icon from '~/ui/elements/Icon'

import options from './options'
import styles from './styles'

import { API_BASE } from '~/store/constants/api'
import { avatarImage } from '~/assets'

@firebase()
@connect(({ firebase })=>({
  // token: authSelectors.getToken(state),
  // todos: dataToJS(firebase, 'todos'),
}), commonActions)
export default class extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount(){
    this.componentWillFocus()
  }

  componentWillFocus(){       
    
  }

  renderList(list){
    const {forwardTo, firebase, todos} = this.props        
    console.log('todos;', todos, firebase)

    return (
      <Content style={styles.content} >
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
                  {index % 3 === 1 
                    ? <Icon red large name="busy" /> 
                    : <Icon green large name="available" />
                  }
                </Button>
              </Right>
          </ListItem>   
        )} 
      </Content>
    )
  }

  render() {    

    return (          
       
        <Container>         

            <Tabs>
                <Tab style={styles.container} heading="All">                       
                    {this.renderList(options.list)}                                          
                </Tab>
                <Tab style={styles.container} heading="Admin">
                    {this.renderList(options.list)}
                </Tab>
                <Tab style={styles.container} heading="Sale">
                    {this.renderList(options.list)}
                </Tab>
                <Tab style={styles.container} heading="Support">
                    {this.renderList(options.list)}
                </Tab>
            </Tabs>   
            
        </Container>
      
    )
  }
}