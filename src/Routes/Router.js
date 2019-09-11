import React from 'react';

import {Router , Route} from 'react-router';
import LoginComponent from '../containers/Registration/Login/Login';
import RegisterComponent from '../containers/Registration/Register/Register';
import ForgotComponent from '../containers/Registration/Forgot/Forgot';
import SocialComponent from '../containers/Registration/Social/Social';



export default class AppRouter { 
    constructor(props){
        super(props)
    }

    render() {
        return (
             <Router>
                 <Authentication />
                 <Dashboard />
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
            <Route path="/NewNotify" exact component={} /> 
            <Route path="/Notifications" exact component={} /> 
            <Route path="/Notifications/Deleted" exact component={} /> 
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