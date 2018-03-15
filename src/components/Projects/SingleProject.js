import React from 'react';
import { Row, Col } from 'reactstrap';
import '../../styles/newProject.css';
import ComponentList from '../Components/ComponentList';
import ComponentCreator from '../Components/ComponentCreator';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchSingleProject } from '../../redux/projects.actions';

class NewProject extends React.Component {

  componentDidMount() {
    this.props.fetchSingleProject(this.props.match.params.id)
  }

  submit = values => {
  }
  render () {
    return (
        <Row className='new-project-display'>
          <Col md={3} id='left-display'>
            <ComponentCreator onSubmit={this.submit}/>
          </Col>
          <Col md={6} id='main-display'>
            <ComponentList />
          </Col>
          <Col md={3} id='right-display'>
            Right Display
          </Col>
        </Row>
    )
  }
}

const mapStateToProps = state => {
  return ({
    components: state.components
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSingleProject
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
