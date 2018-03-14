import React from 'react';
import Component from './Component';
import { connect } from 'react-redux';

class ComponentList extends React.Component {


  render() {
    console.log('props in compList', this.props);
    let someComponent = this.props.components?this.props.components.childComponents:[];
    let componentList = someComponent.map(comp => {
      <Component key={comp.id} comp={comp} />
    })
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
      {componentList}
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

function mapStateToProps(state){
  return({
    dbComponent: state.components
  })
}


export default connect(mapStateToProps, null)(ComponentList);
