import React, { Component } from 'react';

 class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">AppcesTree</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Signup">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/User">User Dash</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNav;
