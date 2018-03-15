import React from 'react';
import  Login  from './Login';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
      <div className='container'>
        <Form>
          <h3>Sign up</h3>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="password" name="password" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
        </Form>
        <Login style={{
          gridColumn: `4 / span 4`,
          gridRow: `4 / span 4`
        }}/>
        <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </div>
    );
  }
}

export default Signup;
