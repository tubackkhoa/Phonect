import material from '~/theme/variables/material'

export default {
  container: {
    borderBottomWidth: 0,
  },
  searchContainer: {    
    backgroundColor: '#fff',
    borderColor:'transparent',
    borderRadius: 5,            
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 0,
    // marginLeft:-20,    
    // width: material.deviceWidth/2 + 60,        
    height:30,    
    flexDirection:'row',  
  },
  searchIcon:{
    color:'#7A797B',
    paddingRight:0,
    fontSize: 16,
  },
  closeIcon: {
    paddingRight:0,
    fontSize: 18,
  },
  title:{
    fontSize: 17,
    fontWeight: '400',
  },
  menuIcon:{
    marginLeft:0,
  },
  uploadIcon: {
    fontSize: 17,
    marginRight:-3    
  },
  searchInput:{
    height: material.platform === 'ios' ? 30 : 50,    
    color: material.textColor,
    fontSize: 14,
  }
}