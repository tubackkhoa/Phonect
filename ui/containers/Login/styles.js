import material from '~/theme/variables/material'

export default {
  container: {    
    flex: 1,
    alignItems: 'center',  
    justifyContent: 'center',   
    flexDirection: 'column',  
    backgroundColor: '#000',          
  },  
  form:{
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: -20, 
    zIndex: 1, //above image
  },
  button: {
    marginTop: 15,    
    backgroundColor: '#0086ac',        
    justifyContent: 'center',
    width: material.deviceWidth - 40,
    alignSelf: 'center',       
    borderRadius: 3,
  }, 
  splash:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textLogo: {
    color: '#fff',
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 30,
    backgroundColor: 'transparent',          
  },
  bottomContainer:{    
    marginTop: material.deviceHeight * 0.5,        
    width: '100%',
    height: material.deviceHeight * 0.5,
    alignItems: 'center',
  },
  socialButtons: {        
    marginTop: 40,
  },
  socialButton:{
    width: 250,
    margin: 10,
    justifyContent: 'space-around',
    paddingLeft: 0,
  },
  socialButtonIcon:{    
    fontSize: 20,    
  },
}