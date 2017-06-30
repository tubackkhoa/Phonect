import React, { Component } from 'react'
import {Keyboard} from 'react-native'
import { connect } from 'react-redux'
import {         
    Header, Left, Right, Body,           
    Text, Title, Button, Item, Input,
} from 'native-base'

import * as commonSelectors from '~/store/selectors/common'
import * as commonActions from '~/store/actions/common'

import Icon from '~/ui/elements/Icon'
import styles from './styles'

export default class extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      searchString: '',
    }
  }

  handleClear(){
    this.setState({searchString: ''})
    Keyboard.dismiss()
  }

  handleSearch(searchString){
    this.setState({searchString})
    this.props.onSearch && this.props.onSearch(searchString)
  }

  renderHeaderTitle(title){
    const center = (
      <Title full style={styles.title}>{title}</Title>
    )
    return this.renderHeader(center)    
  }

  // public data not event
  renderHeaderSearch(){        
    const {searchString} = this.state
    const center = (
      <Item style={styles.searchContainer}>
          <Icon name="search" style={styles.searchIcon} />
          <Input value={searchString} 
            autoCorrect={false} onChangeText={this.handleSearch.bind(this)} 
            placeholderTextColor="#7A797B" style={styles.searchInput} 
            placeholder="Search People" />  
          {!!searchString.length && 
          <Icon
            onPress={this.handleClear.bind(this)}
            style={styles.closeIcon}
            name="close"
          />                      
          }
      </Item>
    )
    return this.renderHeader(center)    
  }

  renderHeader(center, props) {    
    return (                             
      <Header noShadow {...props} style={styles.container}>                  
        <Body>{center}</Body>        
      </Header>     
    )
  }

  render(){    
    const {type, title} = this.props        
    switch(type){      
      case 'search':      
        return this.renderHeaderSearch()
      default:
        return this.renderHeaderTitle(title)
    } 
  }
}

