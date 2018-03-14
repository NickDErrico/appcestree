import React from 'react';
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Component = (props) => {

  return (
    <Card style={{
      gridColumn: `${props.gridCol} / span ${props.colSpan}`,
      gridRow: `${props.gridRow} / span ${props.rowSpan}`
    }}>
      <p>App</p>
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
