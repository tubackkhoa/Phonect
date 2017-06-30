import React, { Component, PropTypes } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Icon as IconNB, mapPropsToStyleNames, connectStyle } from 'native-base'
import Icomoon, { glyphMap } from '~/ui/elements/PhonectIcon'

// we can connect to whatever Name space
@connectStyle('NativeBase.Icon', {}, mapPropsToStyleNames)
export default class extends Component {

  static propTypes = {               
      name: PropTypes.string.isRequired,                   
      stroke: PropTypes.string,
      strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])   
  }

  renderIcon(){
    const {style={}, name, onPress, ...props} = this.props    
    // fallback to material?
    return (
      glyphMap[name] 
      ? <Icomoon {...this.props} />
      : <IconNB {...this.props} />
    )
  }

  render(){
    const {onPress} = this.props   
    // if do not have onPress, should make clickable from parent 
    return (onPress
      ? <TouchableWithoutFeedback onPress={onPress} >
          {this.renderIcon()}
        </TouchableWithoutFeedback>
      : this.renderIcon()
    )
  }
} 

