import material from '~/theme/variables/material'

export default {
  container:{
    margin:5,
    backgroundColor:'transparent'
  },
  content:{
    // marginTop:10,
    backgroundColor:'red',    
    backgroundColor:'#FFF',  
    padding: 10,
  },
  rightContainer:{
    borderBottomWidth:0,   
    paddingRight: 0,    
  },
  listItemContainer:{
    borderBottomWidth:0.5,
    borderColor: material.listBorderGrayColor,
    marginLeft:0,
    marginRight:0,    
    height: 75,        
  },
  thumb:{
    borderRadius: 27,    
    width: 54,
    height: 54,    
    borderWidth: 1,
    borderColor: '#979797',
  },
  textLarge:{
    fontSize: 20,
  },
  button: {
    height: 18,
    paddingTop:material.platform === 'ios' ? 5 : -5,    
  },
}