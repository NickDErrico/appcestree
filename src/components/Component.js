import React from 'react';
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { addComponent } from '../redux/components.actions';
import { bindActionCreators } from 'redux';

const Component = (props) => {

  // function renderComponentCreator() {
  //   console.log('hello');
  // }
  return (
    <Card style={{
      gridColumn: `${props.gridCol} / span ${props.colSpan}`,
      gridRow: `${props.gridRow} / span ${props.rowSpan}`
    }}>
      <p>App</p>
      <p>Stateful: true</p>
      <p>Parent: none</p>
      <UncontrolledDropdown>
        <DropdownToggle caret>
          Children :
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Add Child</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Card>
  )
}

const mapStateToProps = state => ({
  components: state.components
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addComponent
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component);
