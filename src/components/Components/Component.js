import React from 'react';
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Component = (props) => {

  console.log('props in c', props)
  return (
    <Card
      style={{
      display: 'inline-block',
      gridColumn: `4 / span 2`,
      gridRow: `3 / span 2`
    }}
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

export default Component;
