import React from 'react';

import {Router , Route} from 'react-router';
import LoginComponent from '../containers/Registration/Login/Login';
import RegisterComponent from '../containers/Registration/Register/Register';
import ForgotComponent from '../containers/Registration/Forgot/Forgot';
import SocialComponent from '../containers/Registration/Social/Social';
import NewNotifyComponent from '../containers/Home/Notifications/New/NewNotify';
import NotificationsComponent from '../containers/Home/Notifications/Notifications';
import NotifyDelComponent from '../containers/Home/Notifications/Deleted/NotifyDel';



export default class AppRouter { 
    constructor(props){
        super(props)
    }

    render() {
        return (
             <Router>
                 <Authentication />
                 <Dashboard />
                 <Discussion />
             </Router>
        );
    }
}

// Authentication Modules
function Authentication () {
   return(
      <div>
        <Route path="/login" exact component={LoginComponent} /> 
       <Route path="/registraion" exact component={RegisterComponent} /> 
       <Route path="/forgot" exact component={ForgotComponent} /> 
       <Route path="/attemptSocialLogin" exact component={SocialComponent} /> 
      </div>
   ) 
}
// Dashboard Modules
function Dashboard () {
    return(
        <div>
            <Route path="/dashboard" exact component={Dashboard} /> 
            <Route path="/NewNotify" exact component={NewNotifyComponent} /> 
            <Route path="/Notifications" exact component={NotificationsComponent} /> 
            <Route path="/Notifications/Deleted" exact component={NotifyDelComponent} /> 
        </div>
    )
}
// Ggomarry Team Discussion
function Discussion () {
    return(
        <div>
<Route path="/discussion" exact component={} /> 
<Route path='/employee/username' exact component={} /> 

        </div>
    )
}