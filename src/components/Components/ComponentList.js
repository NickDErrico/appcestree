import React from 'react';
import Component from './Component';
import { Card, Button } from 'reactstrap';
import { connect } from 'react-redux';

class ComponentList extends React.Component {


  render() {
    if (!this.props.projectComponents) {
      return <div>Loading...</div>
    }else {
      console.log('props in cl', this.props.projectComponents.children);
      // let componentList = childrenArray.map(comp => <Component key={comp.id} comp={comp} />)
      return (
        <div style={{
          alignItems: 'center',
          backgroundColor: 'purple',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gridRowGap: '1em',
          textAlign: 'center'
        }}>
        <Card style={{
          gridColumn: `6 / span 2`,
          gridRow: `1 / span 2`
        }}
        //needs onClick for the component creator view
        >
          <p>{this.props.projectComponents.name}</p>
              {/* needs onClick to add child to element and display in component creator view */}
              <Button>Add Child</Button>
        </Card>
        {/* {componentList} */}
          {/* <Component
            gridRow={1}
            rowSpan={2}
            gridCol={6}
            colSpan={2}
          />
          <Component
            gridRow={3}
            rowSpan={2}
            gridCol={4}
            colSpan={2}
          />
          <Component
            gridRow={3}
            rowSpan={2}
            gridCol={8}
            colSpan={2}
          /> */}
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return({
    projectComponents: state.projects.currProject
  })
}


export default connect(mapStateToProps, null)(ComponentList);
