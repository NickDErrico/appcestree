import React from 'react';
import  Login  from './Login';
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Form>
              <h3>Sign up</h3>
              <FormGroup>
                <Input type="password" name="password" id="name" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
            </Form>
            <Login />
            <Button color="success" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Signup;
