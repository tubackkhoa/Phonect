import React, { Component } from 'react'
import { Image } from 'react-native'
import { 
  Container,   View,
  Form, 
  Item, 
  Input, 
  Button, 
  Text, 
  Thumbnail, 
  Label,
} from 'native-base'
import styles from './styles'
import { connect } from 'react-redux'
import { firebaseConnect, pathToJS, isLoaded } from 'react-redux-firebase'
import { Field, reduxForm } from 'redux-form'

import routes from '~/ui/routes'
import * as commonActions from '~/store/actions/common'
// import * as authActions from '~/store/actions/auth'
import * as commonSelectors from '~/store/selectors/common'

import Content from '~/ui/components/Content'
import Preload from '~/ui/containers/Preload'
import { InputField } from '~/ui/elements/Form'
import { validate } from './utils'
import { spashImage } from '~/assets'

import Icon from '~/ui/elements/Icon'

@firebaseConnect()
@connect(state =>({  
  auth: pathToJS(state.firebase, 'auth'), 
  initialValues:{
    email: 'contact@qsoftvietnam.com',
    password: 'qs123123',
  },
}), commonActions)
@reduxForm({ form: 'LoginForm', validate})
export default class extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      loading: false,
    }
  }

  _handleLogin = async ({email, password}) => {   
    // this.props.forwardTo('home') 
    this.setState({ loading: true })
    try{
      const user = await this.props.firebase.auth().signInWithEmailAndPassword(email, password)
      console.log(user.uid) 
      this.setState({ loading: false })
          this.props.forwardTo('home')
    } catch(err){
      console.error('error authing with firebase:', err)
      this.setState({ loading: false })
    }
  }

  render() {    
    const { handleSubmit, submitting, forwardTo } = this.props          
    if(this.state.loading){
      return (
        <Preload/>
      )
    }          

    return (
      <Container style={styles.container}>
        <Image source={spashImage} style={styles.splash}>    
                               
          <View style={styles.bottomContainer}>
            <Text style={styles.textLogo}>PHONECT</Text>
            <Form style={styles.form}>                
              <Field
                autoCapitalize="none"
                name="email"
                icon={(input, active)=>input.value && active ? 'close' : false}
                iconStyle={{color:'#000'}}
                onIconPress={input=>input.onChange('')}
                label="Email/ Số điện thoại"
                component={InputField}/>
              <Field
                name="password"
                label="Mật khẩu"
                secureTextEntry={true}
                component={InputField}/>
              <Button
                onPress={handleSubmit(this._handleLogin)}
                style={styles.button}>
                <Text>Sign in</Text>
              </Button>
            </Form>
          </View>

        </Image>
        
      </Container>
    )
  }
}