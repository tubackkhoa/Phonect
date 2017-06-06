import React, { Component } from 'react'
import {             
    Button, List, ListItem, Switch,
    Container, Text, Item, Input, Left, Body, Right, View,
} from 'native-base'
// svg is more powerful
// import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Content from '~/ui/components/Content'
import Icon from '~/ui/elements/Icon'
import options from './options'
import styles from '../shared/styles'
import material from '~/theme/variables/material'

import { Pie } from '~/ui/components/Chart'

 let data = [{
      // "name": "Washington",
      value: 75
    }, {
      // "name": "Oregon",
      value: 25
    }]

    let options1 = {
      
      width: 100,
      height: 100,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }

export default class extends Component {

  renderOption(option, key, last){    
    return (      
      <ListItem
        key={key}
        last={last}
        style={styles.listItemContainer}>
        <Text left>{option.title}</Text>
        <View
          row
          style={styles.listItemInnerContainer}>
          <View row>
            <Text
              active
              large>{option.total}</Text>
            <Text
              note
              style={styles.normalText}> {option.quantity}</Text>
          </View>
          <View row>
            <Icon
              name="up-arrow"
              small
              green/>
            <Text
              active
              large> {option.increased}</Text>
            <Text
              note
              style={styles.normalText}> {option.quantity}</Text>
          </View>
        </View>
      </ListItem>
    )
  }

  renderFirstOption(){
    return (
      <ListItem>                        
        <View style={{
          flexDirection: 'column',        
        }}>
          <Text left>Mobile data traffic</Text>
          <View
            row
            style={styles.normalText}>
            <Text
              active
              large>800</Text>
            <Text
              note
              style={styles.normalText}> mb</Text>
          </View>
          <View row>
            <Text
              active
              large>0.75</Text>
            <Text
              note
              style={styles.normalText}>/ 1GB</Text>
          </View>
        </View>
        <Right>

        <Pie data={data}
          options={options1}
          accessorKey="value"
          color={
            [
              material.blueColor,
              '#E2EFFF',
            ]
          }
          r={38}
          R={48}
          />
          <Text
            active
            large
            style={styles.percentText}>75%</Text>
        </Right>
      </ListItem>
    )
  }

  render() {
   

    return (      
      <Content padder>    

      

        <View phonect>    
          {this.renderFirstOption()}
          {options.list.map((item, index)=>this.renderOption(item, index, index===options.list.length-1))}
        </View>
      </Content>                               
    )
  }
}