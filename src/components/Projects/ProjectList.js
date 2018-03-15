import React from 'react';
import { connect } from 'react-redux';
import Project from '../Projects/ProjectListItem';
import { Card } from 'reactstrap';
import '../../styles/projectList.css';

const ProjectList = (props) => {

  if(!props.projects) {
    return <div>loading...</div>
  }else {
    console.log('props in pl', props);
    let listOfProjects = props.projects.map(project => <Project key={project.id} project={project}  />)
  return (
    <Card className='project-list'>{listOfProjects}</Card>
    )
  }
}

const mapStateToProps = state => ({ projects: state.projects.allProjects })


export default connect(mapStateToProps, null)(ProjectList);
