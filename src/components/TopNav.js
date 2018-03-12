import React from 'react';

 export default class TopNav extends React.Component {
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
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">AppcesTree</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/Signup">Signup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/User">User Dash</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
