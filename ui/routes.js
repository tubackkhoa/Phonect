import Home from './containers/Home'
import Login from './containers/Login'
import UserSetting from './containers/User/Setting'
import People from './containers/People/Index'
import Data from './containers/Data'
import Call from './containers/Call'
import Footer from './components/Footer'

import { StackNavigator, TabNavigator } from 'react-navigation'

export const RootStack = (initialRouteName) => StackNavigator({
    home: {
        screen: TabNavigator({            
            home: {        
                screen: Home,
            },
            setting: {        
                screen: UserSetting,
            },            
            people: {        
                screen: People,        
            },
            call: {        
                screen: Call,
            },
            data: {        
                screen: Data,
            },
        }, {
          initialRouteName: 'home',
          headerMode: 'none',
          tabBarComponent: Footer,   
          tabBarPosition: 'bottom',   
          animationEnabled: true,
          swipeEnabled: true,
        }),
    },
    login: {
        screen: Login,
    },
}, {
    initialRouteName, 
    headerMode: 'none',
})
