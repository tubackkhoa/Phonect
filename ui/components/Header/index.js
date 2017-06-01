import React, { Component } from 'react'
import { connect } from 'react-redux'
import {         
    Header, Left, Right, Body,           
    Text, Title, Button, Item, Input,
} from 'native-base'

import * as commonSelectors from '~/store/selectors/common'
import * as commonActions from '~/store/actions/common'

import Icon from '~/ui/elements/Icon'
import styles from './styles'

@connect(state=>({
  searchString: commonSelectors.getSearchString(state),
}), commonActions)
export default class extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      type: props.type,
      title: props.title,
    }
  }

  componentDidMount(){
    this.props.onItemRef && this.props.onItemRef(this)
  }

  show(type, title){
    this.setState({type, title})
  } 

  _search = (value, force=false)=>{
    if((this.props.searchString !== value) || force) {
      this.props.search(value)
    } 
  }

  renderHeaderTitle(title){
    const center = (
      <Title full style={styles.title}>{title}</Title>
    )
    return this.renderHeader(center)    
  }

  // public data not event
  renderHeaderSearch(){        
    const center = (
      <Item style={styles.searchContainer}>
          <Icon name="search" style={styles.searchIcon} />
          <Input value={this.props.searchString} 
            autoCorrect={false} onChangeText={this._search} 
            placeholderTextColor="#7A797B" style={styles.searchInput} 
            placeholder="Search People" />                        
      </Item>
    )
    return this.renderHeader(center)    
  }

  renderHeader(center, props) {    
    return (                             
      <Header {...props} style={styles.container}>                  
        <Body>{center}</Body>        
      </Header>     
    )
  }

  render(){
    // events will be 
    const {type, title} = this.state    
    console.log(type)
    // event will be invoke via pageInstance
    switch(type){
      case 'none':      
        return false
      case 'search':      
        return this.renderHeaderSearch()
      default:
        return this.renderHeaderTitle(title)
    } 
  }
}

