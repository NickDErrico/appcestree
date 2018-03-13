import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

let ComponentCreator = (props) => {
  const { handleSubmit } = props
  return (
    <Card id='current-component'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Component Name</label>
          <Field name='name' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='parents'>Parent Components</label>
          <Field name='parents' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='children'>Children Components</label>
          <Field name='children' component='input' type='text' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </Card>
  )
}

ComponentCreator = reduxForm({
  form: 'component'
})(ComponentCreator)

export default ComponentCreator;
