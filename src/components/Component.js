import React from 'react';
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

const Component = (props) => {
  console.log('props in component', props);
  return (
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
  )
}

const mapStateToProps = state => ({
  components: state.components
})

export default connect(mapStateToProps, null)(Component);
