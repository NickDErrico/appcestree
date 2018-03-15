import React, { Component } from 'react';
import  Signup  from './Signup';
import '../styles/home.css';

class Home extends Component {
  render () {
    return (
      <div
        className='container'
        style={{
          alignItems: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)',
          gridRowGap: '1em',
          textAlign: 'center'
        }}>
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
