import { StyleSheet } from 'react-native'
import material from '~/theme/variables/material'

// const hairlineWidth = StyleSheet.hairlineWidth

export default {
    wrapper: {
        flexDirection: 'row',        
        borderBottomWidth: 2,
        borderColor: material.listBorderColor,
    },
    main: {
        flex: 1,
        alignSelf: 'flex-end'
    },
    row: {
        flexDirection: 'row'
    }
}

export const BG_COLOR = '#d2d5dc'

export const keyStyle = {
    wrapper: {
        flex: 1,
        height: 55,
        backgroundColor: '#fff'
    },
    bd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: material.listBorderColor,
    },
    get border() {
      return {
        ...this.bd,
        borderColor: '#FFF',
      }      
    },
    mainText: {
        fontSize: 28,
        color: '#000'
    },
    otherText: {
        fontSize: 10,
        color: '#333',
    },
    bgLessL: {
      backgroundColor: '#fff'
    },
    dot: {
        height: 30,
        fontSize: 30,
        lineHeight: 25
    }
}