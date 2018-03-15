import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../Projects/ProjectList';
import { Link } from 'react-router-dom';
import '../../styles/userDash.css';

class UserDash extends Component {

  render () {

    return (
      <div className='project-list-container'>
        <h3>Existing Projects: </h3>
          <ProjectList />
        <Link to='/new'>New Project</Link>

      </div>
    )
  }
}

const mapStateToProps = state => ({ projects: state.projects })

export default connect(mapStateToProps)(UserDash);
