import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card } from 'reactstrap';
import { connect } from 'react-redux';
// import { addComponent } from '../../redux/components.actions';
// import { bindActionCreators } from 'redux';

let ComponentCreator = (props) => {
  console.log('props in cd', props);
  const { handleSubmit } = props
  return (
    <Card id='current-component'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Component Name:</label>
          <Field name='name' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='parent_id'>Parent Component:</label>
          <Field className='form-control' name='parent_id' component='input' />
        </div>
        {/* <div>
          <label htmlFor='children'>Child Components:</label>
          <Field name='children' component='input' type='text' />
        </div> */}
        <div>
          <label htmlFor='is_stateful'>Is stateful:</label>
          <label><Field name='is_stateful' component='input' type='radio' value='true'/> true </label>{' '}
          <label><Field name='is_stateful' component='input' type='radio' value='false'/> false </label>{' '}
        </div>
        <div>
          <label htmlFor='is_route'>Needs a route:</label>
          <label><Field name='is_route' component='input' type='radio' value='true'/> true </label>{' '}
          <label><Field name='is_route' component='input' type='radio' value='false'/> false </label>{' '}
        </div>
        <button type='submit'>Submit</button>
      </form>
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
