import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import YoutubePage from './components/YoutubePage'
import ContactUs from './components/ContactUs'
import Plan from './components/Plan'
import Profile from './components/Profile'
import Account from './components/Account'


import NotFound from './components/NotFound'



import './App.css'
import Settings from './components/Settings'
import Help from "./components/Help"

class App extends Component {
  state = {
    
  }

  render() {
    

    return (
      
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/youtube" component={YoutubePage} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/help" component={Help} />
          
          

          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      
    )
  }
}

export default App
