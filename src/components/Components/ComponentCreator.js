import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
// import { addComponent } from '../../redux/components.actions';
// import { bindActionCreators } from 'redux';

let ComponentCreator = (props) => {
  console.log('props in cd', props);
  const { handleSubmit } = props
  return (
    <Card id='current-component'>
      <h3>Component Editor </h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor='name'>Component Name: &nbsp;</label>
          <Field className='form-control' name='name' component='input' type='text' />
        </FormGroup>
        <FormGroup>
          <label htmlFor='parent_id'>Parent Component: &nbsp;</label>
          <Field className='form-control' name='parent_id' component='select'>
            <option>App</option>
            <option>Auth</option>
            <option>UserDash</option>
            <option>Login</option>
            <option>Signup</option>
          </Field>
        </FormGroup>
        {/* <FormGroup>
          <label htmlFor='children'>Child Components:</label>
          <Field name='children' component='input' type='text' />
        </FormGroup> */}
        <FormGroup >
          <label htmlFor='is_stateful'>Is stateful: &nbsp;</label>
          <label><Field name='is_stateful' component='input' type='radio' value='true'/> true </label>{' '}
          <label><Field name='is_stateful' component='input' type='radio' value='false'/> false </label>{' '}
        </FormGroup>
        <FormGroup>
          <label htmlFor='is_route'>Needs a route: &nbsp;</label>
          <label><Field name='is_route' component='input' type='radio' value='true'/> true </label>{' '}
          <label><Field name='is_route' component='input' type='radio' value='false'/> false </label>{' '}
        </FormGroup>
        <FormGroup>
          <label htmlFor='is_route'>Has Props: &nbsp;</label>
          <label><Field name='is_route' component='input' type='radio' value='true'/> true </label>{' '}
          <label><Field name='is_route' component='input' type='radio' value='false'/> false </label>{' '}
        </FormGroup>
        <FormGroup>
          <label htmlFor='is_route'>Has Children: &nbsp;</label>
          <label><Field name='is_route' component='input' type='radio' value='true'/> true </label>{' '}
          <label><Field name='is_route' component='input' type='radio' value='false'/> false </label>{' '}
        </FormGroup>
        <FormGroup>
          <label htmlFor='is_route'>Lifecycle Methods: &nbsp;</label>
          <label><Field name='is_route' component='input' type='radio' value='true'/> true </label>{' '}
          <label><Field name='is_route' component='input' type='radio' value='false'/> false </label>{' '}
        </FormGroup>
        <button className='btn btn-danger' type='submit'>Submit</button>
      </Form>
    </Card>
  )
}


ComponentCreator = reduxForm({
  form: 'components'
})(ComponentCreator)

const mapStateToProps = state => ({
  initialValues: state.projects.selectedComponent,
  components: state.components,
  parentComponent: state.parent_child_component
})
// const mapDispatchToProps = dispatch => bindActionCreators({
//   addComponent
// }, dispatch)

export default connect(mapStateToProps, null)(ComponentCreator);
