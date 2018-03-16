import React from 'react';
import { connect } from 'react-redux';
// import { addComponent } from '../../redux/components.actions';
// import { bindActionCreators } from 'redux';

let ComponentDetails = (props) => {
  console.log('props in cd', props);
  return (
    <div>
      <h3 className='text-center'>Component Details </h3>
      <table className="table">
        <thead>
          <tr className='table-danger'>
            <th scope="col">Name</th>
            <th scope="col">Has State?</th>
            <th scope="col">Has Route?</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <th scope="row">{props.component.name}</th>
            <td>{(props.component.is_stateful !== undefined) && `${props.component.is_stateful}`}</td>
            <td>{(props.component.is_route !== undefined) && `${props.component.is_route}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const mapStateToProps = state => ({
  component: state.projects.selectedComponent,
})
// const mapDispatchToProps = dispatch => bindActionCreators({
//   addComponent
// }, dispatch)

export default connect(mapStateToProps, null)(ComponentDetails);
