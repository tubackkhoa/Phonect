import material from '~/theme/variables/material'

export default {
  inputContainer: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 15,
    padding: 10,
    borderColor: '#E2F0FF',
    borderWidth: 1,
  },
  textLarge: {
    fontSize: 28,
  },
  textSmall: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',    
    marginHorizontal: 15,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  oneHalf: {
    width: (material.deviceWidth - 40) / 2,
    paddingLeft: 10,        
  }
}