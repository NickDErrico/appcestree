import React from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/newProject.css';
import ComponentList from './ComponentList';
import ComponentCreator from './ComponentCreator';

class NewProject extends React.Component {
  submit = values => {
    console.log('values', values);
  }
  render () {
    return (
        <Row className='new-project-display'>
          <Col md={3} id='left-display'>
            <ComponentCreator onSubmit={this.submit} />
          </Col>
          <Col md={6} id='main-display'>
            <ComponentList />
          </Col>
          <Col md={3} id='right-display'>
            Right Display
          </Col>
        </Row>
    )
  }
}

export default NewProject;
