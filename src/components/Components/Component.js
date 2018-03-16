import React from 'react';
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { selectComponent } from '../../redux/projects.actions';
import { bindActionCreators } from 'redux';

const Component = (props) => {

  let spacingStyle = {}

  // let dynamicStyling = () => {

    if (props.comp.id === 1) {
      spacingStyle = {
        gridColumn: `6 / span 2`,
        gridRow: `1 / span 2`
      }
    }else if (props.comp.id === 2) {
      spacingStyle = {
        gridColumn: `4 / span 2`,
        gridRow: `3 / span 2`
      }
    }else if (props.comp.id === 3) {
      spacingStyle = {
        gridColumn: `8 / span 2`,
        gridRow: `3 / span 2`
      }
    }else if (props.comp.id === 4) {
      spacingStyle = {
        gridColumn: `3 / span 2`,
        gridRow: `5 / span 2`
      }
    }else if (props.comp.id === 5) {
      spacingStyle = {
        gridColumn: `5 / span 2`,
        gridRow: `5 / span 2`
      }
  }

  console.log('props in c', props)
  return (
    <Card
      className='border-success mb-3'
      style={spacingStyle}
      onClick={() => props.selectComponent(props.comp.id)}
    >
      <p>{props.comp.name}</p>
      <UncontrolledDropdown>
        <DropdownToggle caret>
          Children :
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Add Child</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Card>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectComponent
}, dispatch)

export default connect(null, mapDispatchToProps)(Component);
