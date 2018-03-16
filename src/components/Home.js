import React, { Component } from 'react';
import  Signup  from './Signup';
import '../styles/home.css';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container-signup'>
          <Signup style={{
            gridColumn: `4 / span 4`,
            gridRow: `1 / span 4`,
            gridColumnGap: '1em',
          }}/>
        </div>
      </div>
    )
  }
}

export default Home;
