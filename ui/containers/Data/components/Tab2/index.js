import React, { Component } from 'react'
import {             
    Button, List, ListItem, Switch,
    Container, Text, Item, Input, Left, Body, Right, View,
} from 'native-base'
import Content from '~/ui/components/Content'
import Icon from '~/ui/elements/Icon'
import options from './options'
import styles from '../shared/styles'
import material from '~/theme/variables/material'

import { StockLine, Scatterplot } from '~/ui/components/Chart'

import Svg, { G, Line, Circle } from 'react-native-svg'

export default class extends Component {

  renderLine(showCircle=false, color){
    return (
      <Svg width={50} height={20}>
            
            
            <Line x1="10%" y1="5" x2="90%" y2="5"
      stroke={color} strokeWidth={1} fill="none"/>
  {showCircle && <Circle cx="10%" cy="5" r="2" strokeWidth="1" 
            stroke={color} fill="white"/>}
{showCircle && <Circle cx="90%" cy="5" r="2" strokeWidth="1" 
            stroke={color} fill="white"/> }
            
          </Svg>
    )
  }

  renderDescription(){
    return (
      <View style={{        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
      }}>

        <View row style={{
          flex: 1,
        }}>
           {this.renderLine(true, material.blueColor)}
          <Text style={{
            fontSize: 14,
            marginTop: 10,
            marginLeft: 10,            
          }}>My data{'\n'}usage</Text>
        </View>

        <View row style={{
          flex: 1
        }}>
          {this.renderLine(false, material.redColor)}
          <Text style={{
            fontSize: 14,
            marginTop: 10,
            marginLeft: 10,            
          }}>Limited's{'\n'}subscription</Text>
        </View>
      </View>
    )
  }

  render() {
    const {route} = this.props         
    const labelStyle = {
      fontFamily: options.chart.axisX.label.fontFamily,
      fontSize: options.chart.axisX.label.fontSize,          
      color: options.chart.axisX.label.fill,
    }  
    const labelStyleActive = {
      ...labelStyle,
      color: material.blueColor,
    }

    return (      
      <Content>    

      <View padder style={{
        marginTop: 10,
        paddingBottom: 15,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:material.listBorderColor,
      }}>

      <Text style={labelStyle}>Data GB</Text>
      <StockLine data={options.data}                  
          options={options.chart} 
          custom={<Line y={-8} x1="0" y1="40%" x2="92%" y2="40%"
      stroke={material.redColor} strokeWidth={1} fill="none"/>}
           xKey='x' yKey='y' />

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 0,
            paddingLeft: 20,
            paddingRight: 15,
            flex: 1,
          }}>
            {options.chart.axisX.tickValues.map((tick, index)=>
              <Text key={index} style={index === 5 ? labelStyleActive : labelStyle}>{tick.value}</Text>
            )}
          </View>

          <Text note style={{marginLeft: 20, marginTop:10, fontSize: 10}}>2017</Text>

          {this.renderDescription()}
      </View>
      </Content>                               
    )
  }
}