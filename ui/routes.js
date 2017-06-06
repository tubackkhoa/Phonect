import Home from './containers/Home'
import NotFound from './containers/NotFound'
// import Notification from './containers/Notification'
import Login from './containers/Login'
import UserSetting from './containers/User/Setting'
import People from './containers/People/Index'
import Data from './containers/Data'
import Call from './containers/Call'
// import WebRTC from './containers/WebRTC'

// we can use animationType object for each route via Navigator.SceneConfigs
export default {
    notFound: {
        title: 'Not Found',
        Page: NotFound,
        headerType: 'none',
        footerType: 'none',
    },
    call: {
        title: 'Call',
        Page: Call,
    },
    home: {        
        title: 'My Status',
        Page: Home,                
    },  
    data: {
        title: 'Data',
        Page: Data,
    },   
    people: {
        title: 'People',
        Page: People,
        headerType: 'search',
    },   
    setting: {
        title: 'Setting',
        Page: UserSetting,
    },       
    login: {
        title: 'Login',
        Page: Login,        
        headerType: 'none',
        footerType: 'none',
    },
    // webrtc:{
    //     title: 'WebRTC',
    //     Page: WebRTC,
    // },

}
