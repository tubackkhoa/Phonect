import material from '~/theme/variables/material'

export default {
  container: {
    marginTop:10,
    marginBottom:10,
  },
  avatarContainer:{           
    alignSelf: 'center',
    zIndex:10,    
  },
  textSmall: {
    fontSize: 14,
  },
  avatar:{          
    width: 94,
    get height(){
      return this.width
    },
    get borderRadius(){
      return Math.round(this.width /2)
    },
  },
  photoIcon:{    
    position:'absolute',
    borderColor: material.blueColor,
    borderWidth: 1,
    width: 18,
    height: 18,
    borderRadius: 9,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:0,
    left:10,    
  },
  listItemContainer: {
    flexDirection: 'column',
    alignItems:'flex-start'
  },
  listItemInnerContainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between'
  },
  normalText: {
    marginTop: 5
  },
  percentText: {
    position: 'absolute',
    textAlign: 'center',
    width: 96,
    top: 35,
  }
}