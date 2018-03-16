import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './components/Home';
import UserDash from './components/UserDash/UserDash';
import Signup from './components/Signup';
import Login from './components/Login';
import SingleProject from './components/Projects/SingleProject';


class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <TopNav />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/user" component={UserDash} />
              <Route path='/projects/:id' component={SingleProject} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}

export default App
