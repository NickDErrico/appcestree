import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../Projects/ProjectList';
import '../../styles/userDash.css';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class UserDash extends Component {
  state = {
    showForm: false
  }

  render () {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <h3>Existing Projects </h3>
            <ProjectList />
            <Button
              style={{marginTop: '10px', marginBottom: '10px'}}
              color='danger'
              onClick={() => this.setState({showForm: !this.state.showForm})}
            >
                New Project
            </Button>
            {this.state.showForm && <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Project Name: </Label>
                <Input type="text" name="email" id="exampleEmail" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>}
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ projects: state.projects })

export default connect(mapStateToProps)(UserDash);
