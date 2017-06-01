import material from '~/theme/variables/material'

export default {
  rightContainer:{
    borderBottomWidth:0,   
    paddingRight: 10,
  },
  profileHeaderContainer:{    
    marginLeft:0,
    marginRight:0,
    height: 65,
    marginTop: 15,
    marginBottom: 20,
  },
  statusPanelContainer:{
    padding: 10,
  },
  statusOptionsContainer:{
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#E2F0FF',
  },
  thumb:{
    borderRadius: 27,
    width: 54,
    height: 54,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#979797'
  }, 
  iconLarge:{
    fontSize: 45,    
  },
  optionContainer:{
    borderWidth: 0.5,
    borderColor: '#E2F0FF',    
  },
  optionContainerActive:{
    borderWidth: 1,
    marginLeft: -0.5,
    marginTop: -0.5,
    borderColor:'#4A90E2',
    backgroundColor: '#E5F7FF',                      
  },
  optionButton:{       
    flexDirection: 'column',   
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',  
    height: 80,
    width: '100%',      
  },
  optionIcon: {
    fontSize: 30,
  },
  optionText: {
    textAlign: 'center',
    color: '#222',
    fontSize: 16,
    marginTop: 5,
  },
}