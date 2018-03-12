import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './components/Home';
import About from './components/About';
import UserDash from './components/UserDash';
import Signup from './components/Signup';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/user" component={UserDash} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
