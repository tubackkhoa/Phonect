import React, { Component } from 'react'
import { FlatList } from 'react-native'
import {                 
    Button, Container, ListItem, TabHeading, Thumbnail,
    Text, Item, View, Input, Left, Body, Tab, Right, Spinner,
} from 'native-base'

import Content from '~/ui/components/Content'
import Header from '~/ui/components/Header'
import { connect } from 'react-redux'

// import {
//   firebaseConnect,
//   isLoaded,
//   isEmpty,
//   dataToJS,
//   firebase,
// } from 'react-redux-firebase'

import * as commonActions from '~/store/actions/common'
import * as commonSelectors from '~/store/selectors/common'
import * as authSelectors from '~/store/selectors/auth'

import { formatDate } from '~/ui/shared/utils'

import CacheableImage from '~/ui/components/CacheableImage'
import Tabs from '~/ui/components/Tabs'

import Icon from '~/ui/elements/Icon'

import options from './options'
import styles from './styles'

import { API_BASE } from '~/store/constants/api'
import { avatarImage } from '~/assets'
import material from '~/theme/variables/material'

// @firebaseConnect([
//   '/people',
// // ])
// @connect(state=>({  
//   // people: options.list,
//   // people: dataToJS(state.firebase, 'people'), // path of firebase data
//   // searchString: commonSelectors.getSearchString(state),
// }), commonActions)
export default class extends Component {

  constructor(props) {
    super(props)
    this.state={
      searchString: '',
    }
  }

  renderList(filteredPeople){
    if(!filteredPeople){
      return (
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{textAlign: 'center'}}>Loading...</Text>
          <Spinner color={material.textColor} />
        </View>
      )
    }
  
    return (      
      <Content style={styles.content} >        
        <FlatList data={filteredPeople}
          removeClippedSubviews={false}
          renderItem={({item}) =>
          <ListItem            
            onPress={()=>this.props.navigation.navigate('detail', item)}
            avatar
            noBorder
            style={styles.listItemContainer}>
              <Left>
                <Thumbnail
                  style={styles.thumb}
                  source={avatarImage}/>
              </Left>
              <Body>
                <Text style={styles.textLarge}>{item.name}</Text>
                <Text>{item.role}</Text>
              </Body>
              <Right style={styles.rightContainer}>                                              
                <Button
                  iconRight
                  noPadder
                  transparent>
                  {item.status === 'busy' 
                    ? <Icon
                        red
                        large
                        name="busy"/>
                    : <Icon
                        green
                        large
                        name="available"/>
                  }
                </Button>
              </Right>
          </ListItem>   
        }/> 
      </Content>
    )
  }

  renderOption(role){
    
    const filteredPeople = role ? options.list.filter(item=>item.role === role) : options.list
    return this.renderList(filteredPeople)
  }

  renderSearch(searchString){
    
    const filteredPeople = options.list.filter(
      item=> item.name.toLowerCase().indexOf(searchString) !== -1
    )
    return this.renderList(filteredPeople)    
  }

  render() {
    const {searchString} = this.state
    return (
      <Container>
      <Header title="People" type="search" onSearch={searchString=>this.setState({searchString})} />
      {searchString 
      ? this.renderSearch(searchString.toLowerCase()) 
      : <Tabs>
          <Tab
            style={styles.container}
            heading="All">
              {this.renderOption()}
          </Tab>
          <Tab
            style={styles.container}
            heading="Admin">
              {this.renderOption('Admin')}
          </Tab>
          <Tab
            style={styles.container}
            heading="Sale">
              {this.renderOption('Sale')}
          </Tab>
          <Tab
            style={styles.container}
            heading="Support">
              {this.renderOption('Support')}
          </Tab>
        </Tabs>
      }
      </Container>
    )
  }
}