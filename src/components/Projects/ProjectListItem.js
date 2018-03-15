import React from 'react';
import { Card } from 'reactstrap';
import { withRouter } from 'react-router-dom';


const ProjectListItem = (props) => (
    <Card onClick={() => props.history.push(`/project/${props.project.id}`)}>
      <p>{props.project.name}</p>
    </Card>
  )


export default withRouter(ProjectListItem);
