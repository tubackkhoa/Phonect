/**
 * Created by vjtc0n on 6/6/17.
 */
import material from '~/theme/variables/material'

export default {
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
  firstListItemContainer: {
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 10,
  },
  firstListItemInnerContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  iconOfPhotoChooser: {
    fontSize: 14,
    color: material.blueColor,
  },
  textOfCompany: {
    marginTop: 10,
  },
  secondListItemInnerContainer: {
    flexDirection: 'column',
  },
  rightImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  centerText: {
    color: '#fff',
    alignSelf:'center',
    marginTop: 45,
  },
  thirdListItemInnerContainer: {
    width: '100%',
    marginTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  thirdListItemIcon: {
    fontSize: 50
  },
  buttonContainer: {
    marginTop: -10,
    justifyContent: 'space-around'
  }
}