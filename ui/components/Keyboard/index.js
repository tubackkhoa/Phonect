import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import styles, { keyStyle, BG_COLOR } from './styles'
import options from './options'

// should have name for searching
export default class Keyboard extends Component {

    static propTypes = {        
        keyboardType: PropTypes.oneOf(['number-pad', 'decimal-pad']),        
        onKeyPress: PropTypes.func,        
        onDelete: PropTypes.func,        
        onClear: PropTypes.func,
    }

    static defaultProps = {
        keyboardType: 'number-pad',
        onKeyPress: () => {},
        onDelete: () => {},
        onClear: () => {},
    }

    constructor(props) {
        super(props)
    }

     _clearAll() {
        this.props.onClear()
    }

    _onPress(key) {
        if (key === '') {
            return

        // delete key
        } else if (key === 'del') {
            this.props.onDelete()

        // number key
        } else {
            this.props.onKeyPress(key)
        }
    }

    _renderOtherText(key) {
      if (this.props.disableOtherText !== true) {
        return (<Text style={keyStyle.otherText}>{key.otherText}</Text>)
      }

      return null
    }

    _disableBorder() {
      if (this.props.disableBorder !== true) {
        return keyStyle.bd
      }

      return keyStyle.border
    }

    _disableClearButtonBackground() {
      if (this.props.disableClearButtonBackground !== true) {
        return keyStyle.bg_d2d5dc
      }

      return keyStyle.bgLess
    }

    _clearBtnUnderlayColor() {
      if (this.props.disableClearButtonBackground !== true) {
        return '#ffffff'
      }

      return '#d2d5dc'
    }

    _renderKey(key, index) {
        return (
            <TouchableHighlight
                key={index}
                underlayColor={BG_COLOR}
                style={keyStyle.wrapper}
                onPress={this._onPress.bind(this, key.mainText)}
            >
                <View style={[keyStyle.bd, this._disableBorder()]}>
                    <Text style={keyStyle.mainText}>{key.mainText}</Text>
                    {this._renderOtherText(key)}
                </View>
            </TouchableHighlight>
        )
    }

    _renderNumberKeys() {
        return options.numberKeys.map((group, groupIndex) => {
            return (
                <View key={groupIndex} style={styles.row}>
                    {group.map(this._renderKey.bind(this))}
                </View>
            )
        })
    }

    _isDecimalPad() {
        return this.props.keyboardType === 'decimal-pad'
    }

    _renderDotKey() {
      if (this.props.disableDot !== true) {
        let dotNode = null,
        dotText = '*'
        if (this._isDecimalPad()) {
            dotText = '.'            
        }
        dotNode = <Text style={keyStyle.mainText}>{dotText}</Text>
        return (
            <TouchableHighlight
                underlayColor="#ffffff"
                style={[keyStyle.wrapper, keyStyle.bg_d2d5dc]}
                onPress={this._onPress.bind(this, dotText)}
            >
                <View style={[keyStyle.bd, this._disableBorder()]}>{dotNode}</View>
            </TouchableHighlight>
        )
      }

      return (
        <TouchableHighlight
          style={keyStyle.wrapper}
        >
          <View />
        </TouchableHighlight>
      )
    }

    render() {
        const props = this.props

        return (
            <View style={styles.wrapper}>
                <View style={styles.main}>

                    {this._renderNumberKeys()}

                    <View style={styles.row}>
                        {this._renderDotKey()}

                        <TouchableHighlight
                            underlayColor={BG_COLOR}
                            style={keyStyle.wrapper}
                            onPress={this._onPress.bind(this, '0')}
                        >
                            <View style={[keyStyle.bd, this._disableBorder()]}>
                                <Text style={keyStyle.mainText}>0</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={this._clearBtnUnderlayColor()}
                            style={[keyStyle.wrapper, this._disableClearButtonBackground()]}
                            onPress={this._onPress.bind(this, 'del')}
                            onLongPress={this._clearAll.bind(this)}
                        >
                            <View style={[keyStyle.bd, this._disableBorder()]}>
                                <Text style={keyStyle.mainText}>#</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}
