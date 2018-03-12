import React, { Component } from 'react';
import { Row, Col, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/newProject.css';

class NewProject extends Component {

  render () {
    return (
        <Row className='new-project-display'>
          <Col md={3} id='left-display'>
            Left Display
          </Col>
          <Col md={6} id='main-display' style={{display:'grid'}}>
            <Card id='initial-component'>
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
