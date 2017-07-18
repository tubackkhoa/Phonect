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
import { Field, reduxForm } from 'redux-form'

import routes from '~/ui/routes'
import * as commonActions from '~/store/actions/common'
import * as authActions from '~/store/actions/auth'
import * as commonSelectors from '~/store/selectors/common'

import Content from '~/ui/components/Content'
import Preload from '~/ui/containers/Preload'
import { InputField } from '~/ui/elements/Form'
import { validate } from './utils'
import { spashImage } from '~/assets'

import Icon from '~/ui/elements/Icon'

@connect(state =>({  
  initialValues:{
    email: 'contact@qsoftvietnam.com',
    password: 'qs123123',
  },
}), {...commonActions, ...authActions})
@reduxForm({ form: 'LoginForm', validate})
export default class extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      loading: false,
    }
  }

  _handleLogin = async ({email, password}) => {   
    // this.props.navigation.navigate('home') 
    // pretending the data retrieve
    // set authstate to trigger switch page
    this.setState({ loading: true })
    this.props.setAuthState(true)
    this.setState({ loading: false })
  }

  render() {    
    const { handleSubmit, submitting, navigation } = this.props          
    if(this.state.loading){
      return (
        <Preload/>
      )
    }          

    return (
      <Container style={styles.container}>
        <Image source={spashImage} style={styles.splash}>    
          <Content>
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
          </Content>
        </Image>
        
      </Container>
    )
  }
}