import React from 'react';
import { Row, Col, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
          <Col md={6} id='main-display' style={{display:'grid'}}>
            <ComponentList />
            <Card id='initial-component-two'>
              <p>App</p>
              <p>Stateful: true</p>
              <p>Parent: none</p>
              <UncontrolledDropdown>
                <DropdownToggle caret>
                  Children :
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>TEST 1</DropdownItem>
                  <DropdownItem>TEST 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Card>
            <Card id='initial-component-three'>
              <p>App</p>
              <p>Stateful: true</p>
              <p>Parent: none</p>
              <UncontrolledDropdown>
                <DropdownToggle caret>
                  Children :
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>TEST 1</DropdownItem>
                  <DropdownItem>TEST 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Card>
          </Col>
          <Col md={3} id='right-display'>
            Right Display
          </Col>
        </Row>
    )
  }
}

export default NewProject;
